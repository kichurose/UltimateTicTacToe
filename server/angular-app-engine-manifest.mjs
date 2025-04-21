
export default {
  basePath: 'https://github.com/kichurose/UltimateTicTacToe.git',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
