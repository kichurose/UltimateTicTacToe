
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/kichurose/UltimateTicTacToe.git',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 542, hash: 'f1178baaf97401eaab1f9b7c0332470ff21725090f55e24e0a99b18963b24ffb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: '22390e2454a54f08d771e818ecb9f093595861f3db43c31363d6701ee7711d6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
