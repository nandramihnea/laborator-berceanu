module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      primary: {
        '0': '#FFEEEE',
        '1': '#FACDCD',
        '2': '#F29B9B',
        '3': '#E66A6A',
        '4': '#D64545',
        '5': '#BA2525',
        '6': '#A61B1B',
        '7': '#911111',
        '8': '#780A0A',
        '9': '#610404'
      },
      neutral: {
        '0': '#FAF9F7',
        '1': '#E8E6E1',
        '2': '#D3CEC4',
        '3': '#B8B2A7',
        '4': '#A39E93',
        '5': '#857F72',
        '6': '#625D52',
        '7': '#504A40',
        '8': '#423D33',
        '9': '#27241D'
      },
      green: {
        '0': '#F2FDE0',
        '1': '#E2F7C2',
        '2': '#C7EA8F',
        '3': '#ABDB5E',
        '4': '#94C843',
        '5': '#7BB026',
        '6': '#63921A',
        '7': '#507712',
        '8': '#42600C',
        '9': '#2B4005'
      },
      blue: {
        '0': '#E0FCFF',
        '1': '#BEF8FD',
        '2': '#87EAF2',
        '3': '#54D1DB',
        '4': '#38BEC9',
        '5': '#2CB1BC',
        '6': '#14919B',
        '7': '#0E7C86',
        '8': '#0A6C74',
        '9': '#044E54'
      },
      yellow: {
        '0': '#FFFBEA',
        '1': '#FFF3C4',
        '2': '#FCE588',
        '3': '#FADB5F',
        '4': '#F7C948',
        '5': '#F0B429',
        '6': '#DE911D',
        '7': '#CB6E17',
        '8': '#B44D12',
        '9': '#8D2B0B'
      },
    },
    screens: {
      'md': {'max': '1023px'},
      'sm': {'max': '670px'},
    },
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus']
    }
  },
  plugins: [],
}