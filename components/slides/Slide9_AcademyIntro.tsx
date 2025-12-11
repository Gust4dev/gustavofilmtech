import React from 'react';
import { SlideWrapper, TextReveal } from '../SlideWrapper';
import { motion } from 'framer-motion';
import { GraduationCap, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

export const Slide9_AcademyIntro: React.FC = () => {
  return (
    <SlideWrapper className="bg-white overflow-hidden">
      
      {/* Background Marca D'água */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
         <img 
            src="/images/logobranca.png" 
            alt="Academy Logo" 
            className="w-[70%] max-w-none opacity-10 blur-sm scale-150 filter invert grayscale"
         />
         <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="w-full h-full flex flex-col justify-center px-6 md:px-16 relative z-10 py-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-full items-center">
            
            {/* === ESQUERDA: O MARKETING (GUSTAVO) === */}
            <div className="flex flex-col justify-center space-y-8">
                <TextReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 border border-emerald-200 rounded-full mb-4">
                        <GraduationCap className="w-4 h-4 text-emerald-700" />
                        <span className="text-emerald-800 font-bold uppercase tracking-widest text-[10px]">
                            O Ativo Atual
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-none tracking-tight mb-2">
                        Autoridade & <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800">
                            Desejo de Mercado.
                        </span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                       Ninguém possui a narrativa e o posicionamento que construímos aqui. Uma abordagem de marketing extremamente forte e sem concorrência direta
                    </p>
                </TextReveal>

                {/* GRID DE DETALHES (TEXTO QUE ELE PEDIU) */}
                <div className="grid grid-cols-1 gap-3">
                    <FeatureRow text="Atrai o público certo e conecta com a massa" />
                    <FeatureRow text="Gera demanda qualificada todos os dias" />
                    <FeatureRow text="Possui mais de 1.200 alunos formados" highlight />
                    <FeatureRow text="Entrega método e transformação real" />
                </div>

                {/* O GARGALO (A DOR) */}
                <TextReveal delay={0.4}>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl flex gap-4 items-start">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-red-900 font-bold text-xs uppercase tracking-wide">O Desafio Até Hoje</h4>
                            <p className="text-red-800/80 text-sm leading-snug mt-1">
                                Sobrava demanda, mas <strong className="font-bold">faltava estrutura</strong> para capturar 100% dos alunos interessados.
                            </p>
                        </div>
                    </div>
                </TextReveal>
            </div>

            {/* === DIREITA: A SOLUÇÃO (UNI AUTO) === */}
            <div className="relative h-full flex flex-col justify-center">
                {/* Linha de Conexão Animada (Do problema para a solução) */}
                <svg className="absolute top-1/2 -left-10 w-20 h-2 hidden lg:block text-emerald-300" viewBox="0 0 100 10">
                    <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden relative"
                >
                    {/* Header do Card */}
                    <div className="bg-gray-900 p-6 flex justify-between items-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-gray-900 opacity-50" />
                        <div className="relative z-10">
                            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest block mb-1">A Nova Estrutura</span>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <div className="bg-white rounded px-3 py-1.5 h-12 flex items-center justify-center shadow-sm">
                                    <img 
                                        src="/images/logouniauto.png" 
                                        alt="Uni Auto" 
                                        className="h-full w-auto object-contain" 
                                    />
                                </div>
                                Uni Auto
                            </h3>
                        </div>
                        <div className="relative z-10 bg-white/10 p-2 rounded-lg backdrop-blur-md">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* Corpo do Card (LISTA DE PODER) */}
                    <div className="p-8 space-y-6 bg-gradient-to-b from-white to-gray-50">
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">O Time de Elite que Escala</p>
                        
                        <ul className="space-y-4">
                            <ListItem title="Atendimento Imediato" sub="Zero leads perdidos por demora." />
                            <ListItem title="Gestão & Previsibilidade" sub="Metas claras e fechamento diário." />
                            <ListItem title="100% da Demanda Convertida" sub="Transformando autoridade em caixa." highlight />
                        </ul>

                        <div className="pt-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-400">Liderado por <strong className="text-gray-900">Rodrigo & Wallisson</strong></p>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </SlideWrapper>
  );
};

// Componentes para limpar o código e deixar bonito
const FeatureRow = ({ text, highlight }: { text: string, highlight?: boolean }) => (
    <TextReveal delay={0.2}>
        <div className={`flex items-center gap-3 p-3 rounded-lg ${highlight ? 'bg-emerald-50 border border-emerald-100' : 'bg-transparent'}`}>
            <CheckCircle2 className={`w-5 h-5 shrink-0 ${highlight ? 'text-emerald-600' : 'text-gray-300'}`} />
            <span className={`text-sm md:text-base font-medium ${highlight ? 'text-emerald-900' : 'text-gray-600'}`}>
                {text}
            </span>
        </div>
    </TextReveal>
);

const ListItem = ({ title, sub, highlight }: { title: string, sub: string, highlight?: boolean }) => (
    <li className="flex items-start gap-4">
        <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${highlight ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-gray-300'}`} />
        <div>
            <span className={`block text-base font-bold ${highlight ? 'text-gray-900' : 'text-gray-700'}`}>{title}</span>
            <span className="text-xs text-gray-500">{sub}</span>
        </div>
    </li>
);