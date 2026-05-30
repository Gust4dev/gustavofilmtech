import React, { useState, Suspense } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { SLIDES_LIST } from '../constants/slides';

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const SLIDE_W_PX = 794;   // 210mm a 96dpi
const SLIDE_H_PX = 1123;  // 297mm a 96dpi
const CAPTURE_SCALE = 1.5; // qualidade ~150dpi

export const AdminPrint: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);

  const generatePDF = async () => {
    setIsGenerating(true);
    setError(null);
    const total = SLIDES_LIST.length;
    setProgress({ current: 0, total });

    // 1. Pré-scroll: aciona whileInView, lazy loading e carregamento de imagens
    for (let i = 0; i < total; i++) {
      document.getElementById(`print-slide-${i}`)?.scrollIntoView();
      await new Promise(r => setTimeout(r, 150));
    }

    // 2. Aguardar Suspense boundaries resolverem (máx 5s)
    let retries = 0;
    while (retries < 50) {
      const loading = Array.from(document.querySelectorAll('[id^="print-slide-"] > div'))
        .filter(el => el.textContent?.startsWith('Carregando'));
      if (loading.length === 0) break;
      await new Promise(r => setTimeout(r, 100));
      retries++;
    }

    // 3. Aguardar todas as imagens da página terminarem de carregar
    await new Promise<void>(resolve => {
      const images = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
      const pending = images.filter(img => !img.complete);
      if (pending.length === 0) { resolve(); return; }
      let done = 0;
      const onSettled = () => { if (++done >= pending.length) resolve(); };
      pending.forEach(img => {
        img.addEventListener('load', onSettled, { once: true });
        img.addEventListener('error', onSettled, { once: true });
      });
      setTimeout(resolve, 8000); // timeout de segurança
    });

    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 600));

    // 4. Aplicar classes de ocultação de logos e debug
    document.body.classList.add('pdf-hide-logos', 'pdf-hide-debug');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    try {
      for (let i = 0; i < total; i++) {
        setProgress({ current: i + 1, total });
        const el = document.getElementById(`print-slide-${i}`);
        if (!el) continue;

        el.scrollIntoView({ block: 'center' });
        await new Promise(r => setTimeout(r, 600));

        const canvas = await html2canvas(el, {
          scale: CAPTURE_SCALE,
          useCORS: true,
          allowTaint: false,
          backgroundColor: '#ffffff',
          windowWidth: SLIDE_W_PX,
          windowHeight: SLIDE_H_PX,
          width: SLIDE_W_PX,
          height: SLIDE_H_PX,
          scrollX: 0,
          scrollY: 0,
          logging: false,
          imageTimeout: 15000,
          onclone: (_clonedDoc, element) => {
            // 1. Forçar todas as imagens visíveis (SmoothImage começa com opacity:0)
            element.querySelectorAll<HTMLImageElement>('img').forEach(img => {
              img.style.opacity = '1';
              img.style.visibility = 'visible';
            });

            // 2. Forçar elementos com opacity:0 (animações Framer Motion ainda não disparadas)
            element.querySelectorAll<HTMLElement>('[style*="opacity"]').forEach(el => {
              if (el.style.opacity === '0') el.style.opacity = '1';
            });

            // 3. Resetar translateY para evitar conteúdo empurrado para fora do container
            element.querySelectorAll<HTMLElement>('[style*="translateY"]').forEach(el => {
              el.style.transform = el.style.transform.replace(/translateY\([^)]+\)/g, 'translateY(0px)');
            });

            // 4. Resetar scale para 1 (whileInView elements presos no estado inicial scale < 1)
            element.querySelectorAll<HTMLElement>('[style*="scale"]').forEach(el => {
              el.style.transform = el.style.transform.replace(/scale\([^)]+\)/g, 'scale(1)');
            });

            // 5. Corrigir bg-clip-text — html2canvas não suporta background-clip:text
            //    Sem isso, renderiza como retângulo colorido sólido em vez de texto
            element.querySelectorAll<HTMLElement>('.bg-clip-text').forEach(el => {
              const classes = Array.from(el.classList);
              (el.style as any).webkitBackgroundClip = 'unset';
              (el.style as any).backgroundClip = 'unset';
              (el.style as any).webkitTextFillColor = 'unset';
              el.style.background = 'transparent';
              // Determinar cor pelo gradiente de origem
              if (classes.some(c => c.startsWith('from-emerald'))) {
                el.style.color = '#059669'; // emerald-600
              } else if (classes.some(c => c.startsWith('from-orange'))) {
                el.style.color = '#EA580C'; // orange-600
              } else if (classes.some(c => c.startsWith('from-brand-red') || c.startsWith('from-red'))) {
                el.style.color = '#DC2626'; // brand-red
              } else {
                el.style.color = '#111827'; // gray-900 fallback
              }
            });

            // 6. Ocultar debug labels no clone
            element.querySelectorAll<HTMLElement>('.no-print').forEach(el => {
              el.style.display = 'none';
            });
          },
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.92);
        // Liberar memória do canvas imediatamente
        canvas.width = 0;
        canvas.height = 0;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, A4_WIDTH_MM, A4_HEIGHT_MM, undefined, 'FAST');
      }

      pdf.save(`FilmTech-Apresentacao-${new Date().toISOString().slice(0, 10)}.pdf`);
    } catch (err) {
      setError(`Erro no slide ${progress.current}: ${String(err)}`);
      console.error('PDF generation error:', err);
    } finally {
      document.body.classList.remove('pdf-hide-logos', 'pdf-hide-debug');
      setIsGenerating(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="admin-print-container">
      {/* Barra de controle sticky */}
      <div className="sticky top-0 z-[1000] w-full bg-gray-900 border-b border-gray-700 px-8 py-4 flex items-center justify-between no-print">
        <span className="text-white font-bold text-sm">
          Preview PDF — {SLIDES_LIST.length} slides
        </span>
        <div className="flex items-center gap-4">
          {error && <span className="text-red-400 text-sm">{error}</span>}
          {isGenerating && (
            <>
              <span className="text-gray-300 text-sm">
                Slide {progress.current} / {progress.total}
              </span>
              <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-300"
                  style={{ width: `${(progress.current / progress.total) * 100}%` }}
                />
              </div>
            </>
          )}
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="px-6 py-2 bg-red-600 text-white rounded-full font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-700 transition-all"
          >
            {isGenerating ? 'Gerando PDF...' : 'Gerar PDF'}
          </button>
        </div>
      </div>

      {/* Slides empilhados para preview */}
      {SLIDES_LIST.map((slide, index) => {
        const SlideComponent = slide.component;

        const activeSectionNumber = SLIDES_LIST
          .slice(0, index + 1)
          .filter(s => s.isSection).length;

        return (
          <div key={slide.id} id={`print-slide-${index}`} className="print-slide">
            <div className="absolute top-4 left-4 z-[999] bg-black text-white px-2 py-1 text-xs no-print">
              Slide {index + 1} / {SLIDES_LIST.length} - {slide.id}
            </div>

            <Suspense fallback={<div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">Carregando slide {index + 1}...</div>}>
              <SlideComponent
                isActive={true}
                direction={1}
                sectionNumber={slide.isSection ? activeSectionNumber : undefined}
                isPrinting={true}
              />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
};
