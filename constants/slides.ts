import { lazy } from 'react';

export interface SlideConfig {
  id: string;
  component: any;
  preload: () => Promise<any>;
  isSection?: boolean;
}

// Each entry has both the lazy component AND the raw import factory.
// Calling preload() triggers the dynamic import and warms the module cache,
// so when the lazy component renders it resolves instantly.
export const SLIDES_LIST: SlideConfig[] = [
  { id: 'cover',                  preload: () => import('../components/slides/Slide1_Cover'),                  component: lazy(() => import('../components/slides/Slide1_Cover').then(m => ({ default: m.Slide1_Cover }))) },
  { id: 'who-we-are',             preload: () => import('../components/slides/Slide_WhoWeAre'),                component: lazy(() => import('../components/slides/Slide_WhoWeAre')) },
  { id: 'origin',                 preload: () => import('../components/slides/Slide2_Origin'),                 component: lazy(() => import('../components/slides/Slide2_Origin').then(m => ({ default: m.Slide2_Origin }))) },
  { id: 'struggle',               preload: () => import('../components/slides/Slide3_Struggle'),               component: lazy(() => import('../components/slides/Slide3_Struggle').then(m => ({ default: m.Slide3_Struggle }))) },
  { id: 'turn',                   preload: () => import('../components/slides/Slide4_Turn'),                   component: lazy(() => import('../components/slides/Slide4_Turn').then(m => ({ default: m.Slide4_Turn }))) },
  { id: 'asset',                  preload: () => import('../components/slides/Slide5_Asset'),                  component: lazy(() => import('../components/slides/Slide5_Asset').then(m => ({ default: m.Slide5_Asset }))) },

  // Private Wrap Section
  { id: 'pw-intro',               preload: () => import('../components/slides/Slide_PW_Intro'),               component: lazy(() => import('../components/slides/Slide_PW_Intro')), isSection: true },
  { id: 'pw-details',             preload: () => import('../components/slides/Slide_PW_Details'),             component: lazy(() => import('../components/slides/Slide_PW_Details')) },
  { id: 'pw-target',              preload: () => import('../components/slides/Slide_PW_Target'),              component: lazy(() => import('../components/slides/Slide_PW_Target')) },
  { id: 'pw-elite',               preload: () => import('../components/slides/Slide_PW_Elite'),               component: lazy(() => import('../components/slides/Slide_PW_Elite')) },
  { id: 'students',               preload: () => import('../components/slides/Slide9a_Students'),              component: lazy(() => import('../components/slides/Slide9a_Students').then(m => ({ default: m.Slide9a_Students }))) },

  // S01: Fundamentos
  { id: 'fundamentos-section',    preload: () => import('../components/slides/Slide17_SectionFundamentos'),   component: lazy(() => import('../components/slides/Slide17_SectionFundamentos').then(m => ({ default: m.Slide17_SectionFundamentos }))), isSection: true },
  { id: 'fundamentos-inicio',     preload: () => import('../components/slides/Slide18_FundamentosInicio'),    component: lazy(() => import('../components/slides/Slide18_FundamentosInicio').then(m => ({ default: m.Slide18_FundamentosInicio }))) },
  { id: 'fundamentos-processo',   preload: () => import('../components/slides/Slide19_FundamentosProcesso'),  component: lazy(() => import('../components/slides/Slide19_FundamentosProcesso').then(m => ({ default: m.Slide19_FundamentosProcesso }))) },

  // S02: Limpeza
  { id: 'limpeza-section',        preload: () => import('../components/slides/Slide20_SectionLimpeza'),       component: lazy(() => import('../components/slides/Slide20_SectionLimpeza').then(m => ({ default: m.Slide20_SectionLimpeza }))), isSection: true },
  { id: 'lavar-vs-descontaminar', preload: () => import('../components/slides/Slide21_LavarVsDescontaminar'),component: lazy(() => import('../components/slides/Slide21_LavarVsDescontaminar').then(m => ({ default: m.Slide21_LavarVsDescontaminar }))) },
  { id: 'tipos-contaminacao',     preload: () => import('../components/slides/Slide22_TiposContaminacao'),    component: lazy(() => import('../components/slides/Slide22_TiposContaminacao').then(m => ({ default: m.Slide22_TiposContaminacao }))) },
  { id: 'processo-descontaminacao', preload: () => import('../components/slides/Slide23_ProcessoDescontaminacao'), component: lazy(() => import('../components/slides/Slide23_ProcessoDescontaminacao').then(m => ({ default: m.Slide23_ProcessoDescontaminacao }))) },
  { id: 'iron-x',                 preload: () => import('../components/slides/Slide23b_IronX'),               component: lazy(() => import('../components/slides/Slide23b_IronX').then(m => ({ default: m.Slide23b_IronX }))) },
  { id: 'ponto-profissional',     preload: () => import('../components/slides/Slide24_PontoProfissional'),    component: lazy(() => import('../components/slides/Slide24_PontoProfissional').then(m => ({ default: m.Slide24_PontoProfissional }))) },
  { id: 'remocao-cola',           preload: () => import('../components/slides/Slide24b_RemocaoCola'),         component: lazy(() => import('../components/slides/Slide24b_RemocaoCola').then(m => ({ default: m.Slide24b_RemocaoCola }))) },

  // S03: Material
  { id: 'material-section',       preload: () => import('../components/slides/Slide25_SectionMaterial'),      component: lazy(() => import('../components/slides/Slide25_SectionMaterial').then(m => ({ default: m.Slide25_SectionMaterial }))), isSection: true },
  { id: 'material-funcao',        preload: () => import('../components/slides/Slide26_MaterialFuncao'),       component: lazy(() => import('../components/slides/Slide26_MaterialFuncao').then(m => ({ default: m.Slide26_MaterialFuncao }))) },
  { id: 'material-escolha',       preload: () => import('../components/slides/Slide27_MaterialEscolha'),      component: lazy(() => import('../components/slides/Slide27_MaterialEscolha').then(m => ({ default: m.Slide27_MaterialEscolha }))) },

  // S04: Estrias
  { id: 'estrias-section',        preload: () => import('../components/slides/Slide6_SectionEstrias'),        component: lazy(() => import('../components/slides/Slide6_SectionEstrias').then(m => ({ default: m.Slide6_SectionEstrias }))), isSection: true },
  { id: 'estrias-causa',          preload: () => import('../components/slides/Slide7_EstriasCausa'),          component: lazy(() => import('../components/slides/Slide7_EstriasCausa').then(m => ({ default: m.Slide7_EstriasCausa }))) },
  { id: 'estrias-regioes-evitar', preload: () => import('../components/slides/Slide8_EstriasRegioesEvitar'),  component: lazy(() => import('../components/slides/Slide8_EstriasRegioesEvitar').then(m => ({ default: m.Slide8_EstriasRegioesEvitar }))) },

  // S05: Repuxamentos
  { id: 'repuxamentos-section',   preload: () => import('../components/slides/Slide9_SectionRepuxamentos'),   component: lazy(() => import('../components/slides/Slide9_SectionRepuxamentos').then(m => ({ default: m.Slide9_SectionRepuxamentos }))), isSection: true },
  { id: 'repuxamentos-causa',     preload: () => import('../components/slides/Slide10_RepuxamentosCausa'),    component: lazy(() => import('../components/slides/Slide10_RepuxamentosCausa').then(m => ({ default: m.Slide10_RepuxamentosCausa }))) },
  { id: 'repuxamentos-conceitos', preload: () => import('../components/slides/Slide11_RepuxamentosConceitos'),component: lazy(() => import('../components/slides/Slide11_RepuxamentosConceitos').then(m => ({ default: m.Slide11_RepuxamentosConceitos }))) },
  { id: 'repuxamentos-verdade',   preload: () => import('../components/slides/Slide12_RepuxamentosVerdade'),  component: lazy(() => import('../components/slides/Slide12_RepuxamentosVerdade').then(m => ({ default: m.Slide12_RepuxamentosVerdade }))) },

  // S06: Marcas
  { id: 'marcas-section',         preload: () => import('../components/slides/Slide13_SectionMarcas'),        component: lazy(() => import('../components/slides/Slide13_SectionMarcas').then(m => ({ default: m.Slide13_SectionMarcas }))), isSection: true },
  { id: 'marcas-origem',          preload: () => import('../components/slides/Slide14_MarcasOrigem'),         component: lazy(() => import('../components/slides/Slide14_MarcasOrigem').then(m => ({ default: m.Slide14_MarcasOrigem }))) },
  { id: 'marcas-pontos',          preload: () => import('../components/slides/Slide15_MarcasPontos'),         component: lazy(() => import('../components/slides/Slide15_MarcasPontos').then(m => ({ default: m.Slide15_MarcasPontos }))) },
  { id: 'marcas-consequencias',   preload: () => import('../components/slides/Slide16_MarcasConsequencias'),  component: lazy(() => import('../components/slides/Slide16_MarcasConsequencias').then(m => ({ default: m.Slide16_MarcasConsequencias }))) },

  // S07: Precificação
  { id: 'precificacao-section',   preload: () => import('../components/slides/Slide28_SectionPrecificacao'),  component: lazy(() => import('../components/slides/Slide28_SectionPrecificacao').then(m => ({ default: m.Slide28_SectionPrecificacao }))), isSection: true },
  { id: 'precificacao-erro',      preload: () => import('../components/slides/Slide29_PrecificacaoErro'),     component: lazy(() => import('../components/slides/Slide29_PrecificacaoErro').then(m => ({ default: m.Slide29_PrecificacaoErro }))) },
  { id: 'tempo-custo',            preload: () => import('../components/slides/Slide30_TempoCusto'),           component: lazy(() => import('../components/slides/Slide30_TempoCusto').then(m => ({ default: m.Slide30_TempoCusto }))) },
  { id: 'precificacao-conclusao', preload: () => import('../components/slides/Slide31_PrecificacaoConclusao'),component: lazy(() => import('../components/slides/Slide31_PrecificacaoConclusao').then(m => ({ default: m.Slide31_PrecificacaoConclusao }))) },

  // S08: Acabamento
  { id: 'acabamento-intro',       preload: () => import('../components/slides/Slide_Acabamento_Intro'),       component: lazy(() => import('../components/slides/Slide_Acabamento_Intro')), isSection: true },
  { id: 'acabamento-tools',       preload: () => import('../components/slides/Slide_Acabamento_Tools'),       component: lazy(() => import('../components/slides/Slide_Acabamento_Tools')) },
  { id: 'acabamento-details',     preload: () => import('../components/slides/Slide_Acabamento_Details'),     component: lazy(() => import('../components/slides/Slide_Acabamento_Details')) },

  // S09: Revisão
  { id: 'revisao-intro',          preload: () => import('../components/slides/Slide_Revisao_Intro'),          component: lazy(() => import('../components/slides/Slide_Revisao_Intro')), isSection: true },
  { id: 'revisao-steps',          preload: () => import('../components/slides/Slide_Revisao_Steps'),          component: lazy(() => import('../components/slides/Slide_Revisao_Steps')) },
  { id: 'revisao-final',          preload: () => import('../components/slides/Slide_Revisao_Final'),          component: lazy(() => import('../components/slides/Slide_Revisao_Final')) },

  // S10: Ferramentas
  { id: 'ferramentas-section',    preload: () => import('../components/slides/Slide32_SectionFerramentas'),   component: lazy(() => import('../components/slides/Slide32_SectionFerramentas').then(m => ({ default: m.Slide32_SectionFerramentas }))), isSection: true },
  { id: 'ferramentas-mentalidade',preload: () => import('../components/slides/Slide33_FerramentasMentalidade'),component: lazy(() => import('../components/slides/Slide33_FerramentasMentalidade').then(m => ({ default: m.Slide33_FerramentasMentalidade }))) },
  { id: 'ferramentas-ppf',        preload: () => import('../components/slides/Slide34_FerramentasPPF'),       component: lazy(() => import('../components/slides/Slide34_FerramentasPPF').then(m => ({ default: m.Slide34_FerramentasPPF }))) },
  { id: 'soprador-sgt',           preload: () => import('../components/slides/Slide34b_SopradorSGT'),         component: lazy(() => import('../components/slides/Slide34b_SopradorSGT').then(m => ({ default: m.Slide34b_SopradorSGT }))) },
  { id: 'espatula-feltro',        preload: () => import('../components/slides/Slide34c_EspatulaFeltro'),      component: lazy(() => import('../components/slides/Slide34c_EspatulaFeltro').then(m => ({ default: m.Slide34c_EspatulaFeltro }))) },
  { id: 'cortador-liner',         preload: () => import('../components/slides/Slide34d_CortadorLiner'),       component: lazy(() => import('../components/slides/Slide34d_CortadorLiner').then(m => ({ default: m.Slide34d_CortadorLiner }))) },
  { id: 'estilete-tecnica',       preload: () => import('../components/slides/Slide34e_EstileteTecnica'),     component: lazy(() => import('../components/slides/Slide34e_EstileteTecnica').then(m => ({ default: m.Slide34e_EstileteTecnica }))) },
  { id: 'lamina-curta',           preload: () => import('../components/slides/Slide34f_LaminaCurta'),         component: lazy(() => import('../components/slides/Slide34f_LaminaCurta').then(m => ({ default: m.Slide34f_LaminaCurta }))) },
  { id: 'solucao-aplicacao',      preload: () => import('../components/slides/Slide34g_SolucaoAplicacao'),    component: lazy(() => import('../components/slides/Slide34g_SolucaoAplicacao').then(m => ({ default: m.Slide34g_SolucaoAplicacao }))) },
  { id: 'solucao-secagem',        preload: () => import('../components/slides/Slide34h_SolucaoSecagem'),      component: lazy(() => import('../components/slides/Slide34h_SolucaoSecagem').then(m => ({ default: m.Slide34h_SolucaoSecagem }))) },
  { id: 'ferramentas-conclusao',  preload: () => import('../components/slides/Slide35_FerramentasConclusao'), component: lazy(() => import('../components/slides/Slide35_FerramentasConclusao').then(m => ({ default: m.Slide35_FerramentasConclusao }))) },

  // Final
  { id: 'deal',                   preload: () => import('../components/slides/Slide11_Deal'),                 component: lazy(() => import('../components/slides/Slide11_Deal').then(m => ({ default: m.Slide11_Deal }))) },
  { id: 'final',                  preload: () => import('../components/slides/Slide12_Final'),                component: lazy(() => import('../components/slides/Slide12_Final').then(m => ({ default: m.Slide12_Final }))) },
];

export const SLIDES_COUNT = SLIDES_LIST.length;

// Preloads a window of slides around a given index without blocking the UI.
export function preloadAround(index: number, radius = 4) {
  const start = Math.max(0, index - 1);
  const end = Math.min(SLIDES_COUNT - 1, index + radius);
  for (let i = start; i <= end; i++) {
    SLIDES_LIST[i].preload().catch(() => {});
  }
}
