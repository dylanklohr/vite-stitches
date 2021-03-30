import * as Stitches from '@stitches/react';

const stitchesConfig = Stitches.createCss({
  theme: {
    colors: {
      myRed: 'red',
      myGreen: 'green',
      myBlue: 'blue',
      myPurple: 'purple',
    },

    space: {
      base: '4px',
      1: '$base',
      2: 'calc (2 * $base)',
      3: 'calc (3 * $base)',
      4: 'calc (4 * $base)',
    },
  },
});

export { Stitches };
const {
  css,
  styled,
  global: globalCss,
  theme,
  keyframes,
  getCssString,
} = stitchesConfig;

export {
  css,
  styled,
  globalCss as stitchesGlobal,
  theme,
  keyframes,
  getCssString,
};
