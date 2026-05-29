import { lazy } from 'react';

export interface SlideConfig {
  id: string;
  component: any; // Using any for lazy components to avoid complex generic typing here
  isSection?: boolean;
}

export const SLIDES_LIST: SlideConfig[] = [
  { id: 'cover', component: lazy(() => import('../components/slides/Slide1_Cover').then(m => ({ default: m.Slide1_Cover }))) },
  { id: 'who-we-are', component: lazy(() => import('../components/slides/Slide_WhoWeAre')) }, // New component
  { id: 'origin', component: lazy(() => import('../components/slides/Slide2_Origin').then(m => ({ default: m.Slide2_Origin }))) },
  { id: 'struggle', component: lazy(() => import('../components/slides/Slide3_Struggle').then(m => ({ default: m.Slide3_Struggle }))) },
  { id: 'turn', component: lazy(() => import('../components/slides/Slide4_Turn').then(m => ({ default: m.Slide4_Turn }))) },
  { id: 'asset', component: lazy(() => import('../components/slides/Slide5_Asset').then(m => ({ default: m.Slide5_Asset }))) },
  
  // Private Wrap Section
  { id: 'pw-intro', component: lazy(() => import('../components/slides/Slide_PW_Intro')), isSection: true },
  { id: 'pw-details', component: lazy(() => import('../components/slides/Slide_PW_Details')) },
  { id: 'pw-target', component: lazy(() => import('../components/slides/Slide_PW_Target')) },
  { id: 'pw-elite', component: lazy(() => import('../components/slides/Slide_PW_Elite')) },
  { id: 'students', component: lazy(() => import('../components/slides/Slide9a_Students').then(m => ({ default: m.Slide9a_Students }))) },
  
  // S01: Fundamentos
  { id: 'fundamentos-section', component: lazy(() => import('../components/slides/Slide17_SectionFundamentos').then(m => ({ default: m.Slide17_SectionFundamentos }))), isSection: true },
  { id: 'fundamentos-inicio', component: lazy(() => import('../components/slides/Slide18_FundamentosInicio').then(m => ({ default: m.Slide18_FundamentosInicio }))) },
  { id: 'fundamentos-processo', component: lazy(() => import('../components/slides/Slide19_FundamentosProcesso').then(m => ({ default: m.Slide19_FundamentosProcesso }))) },
  
  // S02: Limpeza
  { id: 'limpeza-section', component: lazy(() => import('../components/slides/Slide20_SectionLimpeza').then(m => ({ default: m.Slide20_SectionLimpeza }))), isSection: true },
  { id: 'lavar-vs-descontaminar', component: lazy(() => import('../components/slides/Slide21_LavarVsDescontaminar').then(m => ({ default: m.Slide21_LavarVsDescontaminar }))) },
  { id: 'tipos-contaminacao', component: lazy(() => import('../components/slides/Slide22_TiposContaminacao').then(m => ({ default: m.Slide22_TiposContaminacao }))) },
  { id: 'processo-descontaminacao', component: lazy(() => import('../components/slides/Slide23_ProcessoDescontaminacao').then(m => ({ default: m.Slide23_ProcessoDescontaminacao }))) },
  { id: 'iron-x', component: lazy(() => import('../components/slides/Slide23b_IronX').then(m => ({ default: m.Slide23b_IronX }))) },
  { id: 'ponto-profissional', component: lazy(() => import('../components/slides/Slide24_PontoProfissional').then(m => ({ default: m.Slide24_PontoProfissional }))) },
  { id: 'remocao-cola', component: lazy(() => import('../components/slides/Slide24b_RemocaoCola').then(m => ({ default: m.Slide24b_RemocaoCola }))) },
  
  // S03: Material
  { id: 'material-section', component: lazy(() => import('../components/slides/Slide25_SectionMaterial').then(m => ({ default: m.Slide25_SectionMaterial }))), isSection: true },
  { id: 'material-funcao', component: lazy(() => import('../components/slides/Slide26_MaterialFuncao').then(m => ({ default: m.Slide26_MaterialFuncao }))) },
  { id: 'material-escolha', component: lazy(() => import('../components/slides/Slide27_MaterialEscolha').then(m => ({ default: m.Slide27_MaterialEscolha }))) },
  
  // S04: Estrias
  { id: 'estrias-section', component: lazy(() => import('../components/slides/Slide6_SectionEstrias').then(m => ({ default: m.Slide6_SectionEstrias }))), isSection: true },
  { id: 'estrias-causa', component: lazy(() => import('../components/slides/Slide7_EstriasCausa').then(m => ({ default: m.Slide7_EstriasCausa }))) },
  { id: 'estrias-regioes-evitar', component: lazy(() => import('../components/slides/Slide8_EstriasRegioesEvitar').then(m => ({ default: m.Slide8_EstriasRegioesEvitar }))) },
  
  // S05: Repuxamentos
  { id: 'repuxamentos-section', component: lazy(() => import('../components/slides/Slide9_SectionRepuxamentos').then(m => ({ default: m.Slide9_SectionRepuxamentos }))), isSection: true },
  { id: 'repuxamentos-causa', component: lazy(() => import('../components/slides/Slide10_RepuxamentosCausa').then(m => ({ default: m.Slide10_RepuxamentosCausa }))) },
  { id: 'repuxamentos-conceitos', component: lazy(() => import('../components/slides/Slide11_RepuxamentosConceitos').then(m => ({ default: m.Slide11_RepuxamentosConceitos }))) },
  { id: 'repuxamentos-verdade', component: lazy(() => import('../components/slides/Slide12_RepuxamentosVerdade').then(m => ({ default: m.Slide12_RepuxamentosVerdade }))) },
  
  // S06: Marcas
  { id: 'marcas-section', component: lazy(() => import('../components/slides/Slide13_SectionMarcas').then(m => ({ default: m.Slide13_SectionMarcas }))), isSection: true },
  { id: 'marcas-origem', component: lazy(() => import('../components/slides/Slide14_MarcasOrigem').then(m => ({ default: m.Slide14_MarcasOrigem }))) },
  { id: 'marcas-pontos', component: lazy(() => import('../components/slides/Slide15_MarcasPontos').then(m => ({ default: m.Slide15_MarcasPontos }))) },
  { id: 'marcas-consequencias', component: lazy(() => import('../components/slides/Slide16_MarcasConsequencias').then(m => ({ default: m.Slide16_MarcasConsequencias }))) },
  
  // S07: Precificação
  { id: 'precificacao-section', component: lazy(() => import('../components/slides/Slide28_SectionPrecificacao').then(m => ({ default: m.Slide28_SectionPrecificacao }))), isSection: true },
  { id: 'precificacao-erro', component: lazy(() => import('../components/slides/Slide29_PrecificacaoErro').then(m => ({ default: m.Slide29_PrecificacaoErro }))) },
  { id: 'tempo-custo', component: lazy(() => import('../components/slides/Slide30_TempoCusto').then(m => ({ default: m.Slide30_TempoCusto }))) },
  { id: 'precificacao-conclusao', component: lazy(() => import('../components/slides/Slide31_PrecificacaoConclusao').then(m => ({ default: m.Slide31_PrecificacaoConclusao }))) },
  
  // S08: Acabamento
  { id: 'acabamento-intro', component: lazy(() => import('../components/slides/Slide_Acabamento_Intro')), isSection: true },
  { id: 'acabamento-tools', component: lazy(() => import('../components/slides/Slide_Acabamento_Tools')) },
  { id: 'acabamento-details', component: lazy(() => import('../components/slides/Slide_Acabamento_Details')) },
  
  // S09: Revisão
  { id: 'revisao-intro', component: lazy(() => import('../components/slides/Slide_Revisao_Intro')), isSection: true },
  { id: 'revisao-steps', component: lazy(() => import('../components/slides/Slide_Revisao_Steps')) },
  { id: 'revisao-final', component: lazy(() => import('../components/slides/Slide_Revisao_Final')) },
  
  // S10: Ferramentas
  { id: 'ferramentas-section', component: lazy(() => import('../components/slides/Slide32_SectionFerramentas').then(m => ({ default: m.Slide32_SectionFerramentas }))), isSection: true },
  { id: 'ferramentas-mentalidade', component: lazy(() => import('../components/slides/Slide33_FerramentasMentalidade').then(m => ({ default: m.Slide33_FerramentasMentalidade }))) },
  { id: 'ferramentas-ppf', component: lazy(() => import('../components/slides/Slide34_FerramentasPPF').then(m => ({ default: m.Slide34_FerramentasPPF }))) },
  { id: 'soprador-sgt', component: lazy(() => import('../components/slides/Slide34b_SopradorSGT').then(m => ({ default: m.Slide34b_SopradorSGT }))) },
  { id: 'espatula-feltro', component: lazy(() => import('../components/slides/Slide34c_EspatulaFeltro').then(m => ({ default: m.Slide34c_EspatulaFeltro }))) },
  { id: 'cortador-liner', component: lazy(() => import('../components/slides/Slide34d_CortadorLiner').then(m => ({ default: m.Slide34d_CortadorLiner }))) },
  { id: 'estilete-tecnica', component: lazy(() => import('../components/slides/Slide34e_EstileteTecnica').then(m => ({ default: m.Slide34e_EstileteTecnica }))) },
  { id: 'lamina-curta', component: lazy(() => import('../components/slides/Slide34f_LaminaCurta').then(m => ({ default: m.Slide34f_LaminaCurta }))) },
  { id: 'solucao-aplicacao', component: lazy(() => import('../components/slides/Slide34g_SolucaoAplicacao').then(m => ({ default: m.Slide34g_SolucaoAplicacao }))) },
  { id: 'solucao-secagem', component: lazy(() => import('../components/slides/Slide34h_SolucaoSecagem').then(m => ({ default: m.Slide34h_SolucaoSecagem }))) },
  { id: 'ferramentas-conclusao', component: lazy(() => import('../components/slides/Slide35_FerramentasConclusao').then(m => ({ default: m.Slide35_FerramentasConclusao }))) },
  
  // Final Enclosure
  { id: 'deal', component: lazy(() => import('../components/slides/Slide11_Deal').then(m => ({ default: m.Slide11_Deal }))) },
  { id: 'final', component: lazy(() => import('../components/slides/Slide12_Final').then(m => ({ default: m.Slide12_Final }))) },
];

export const SLIDES_COUNT = SLIDES_LIST.length;
