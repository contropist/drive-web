/* eslint-disable */
module.exports = {
  content: ['./src/**/*.tsx'],
  options: {
    safelist: ['nav-item', 'nav-link', 'tab-content', 'tab-pane'],
  },

  theme: {
    screens: {
      xs: '512px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      outline: {
        primary: '2px solid rgb(0,102,255)',
      },
      backdropInvert: {
        25: '25%',
        50: '50%',
        75: '75%',
      },
      brightness: {
        80: '.80',
      },
      dropShadow: {
        soft: '0 6px 12px rgba(0, 0, 0, 0.04)',
        tooltip: ['0px 12px 24px rgba(0,0,0,0.12)', '0px 0px 1px rgba(0,0,0,0.16)'],
      },
      opacity: {
        0: '0',
        1: '.01',
        2: '.02',
        3: '.03',
        4: '.04',
        5: '.05',
        6: '.06',
        7: '.07',
        8: '.08',
        9: '.09',
        10: '.1',
        15: '.15',
        20: '.2',
        25: '.25',
        30: '.3',
        35: '.35',
        40: '.4',
        45: '.45',
        50: '.5',
        55: '.55',
        60: '.6',
        65: '.65',
        70: '.7',
        75: '.75',
        80: '.8',
        85: '.85',
        90: '.9',
        95: '.95',
        100: '1',
      },
      rotate: {
        '10-': '-10deg',
        10: '10deg',
        20: '20deg',
        30: '30deg',
      },
      letterSpacing: {
        0.2: '0.2rem',
        0.3: '0.3rem',
        0.4: '0.4rem',
      },
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        50: '50ms',
        250: '250ms',
      },
      height: {
        footer: 'var(--footer-height)',
        fit: 'fit-content',
      },
      width: {
        sidenav: '210px',
        'sidenav-collapsed': '64px',
        activity: '296px',
        driveNameHeader: '364px',
        date: '220px',
        breadcrumb: 'min(128px, 2ch)',
        size: '96px',
        contextmenu: '128px',
        '0.5/12': '4.166667%',
      },
      margin: {
        '20px': '20px',
        '24px': '24px',
        '15px': '15px',
      },
      minWidth: {
        104: '26rem',
        activity: '296px',
        driveNameHeader: '364px',
        date: '200px',
        breadcrumb: 'min(128px, 2ch)',
      },
      padding: {
        '20px': '20px',
        '42px': '42px',
      },
      borderWidth: {
        3: '3px',
      },
      ringOpacity: (theme) => ({
        DEFAULT: '0.5',
        ...theme('opacity'),
      }),
      backgroundOpacity: (theme) => ({
        ...theme('opacity'),
      }),
      ringWidth: {
        DEFAULT: '3px',
        0: '0px',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        8: '8px',
      },
      borderRadius: {
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '6px': '6px',
        '12px': '12px',
        '1/2': '50%',
      },
      fontSize: {
        'supporting-2': '0.625rem', // 10px
      },
      spacing: {
        50: '12.7rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        156: '37.5rem',
      },
      maxWidth: {
        xxxs: '220px',
        xxs: '280px',
        '3.5xl': '800px',
      },
      scale: {
        0: '0',
        50: '.5',
        55: '.55',
        60: '.60',
        65: '.65',
        70: '.70',
        75: '.75',
        80: '.80',
        85: '.85',
        90: '.90',
        95: '.95',
        96: '.96',
        97: '.97',
        98: '.98',
        99: '.99',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
        300: '3',
        400: '4',
        500: '5',
      },
      boxShadow: {
        b: '2px 1px 3px 0 rgba(0,0,0,0.1),2px 1px 2px 0 rgba(0,0,0,0.06)',
        'photo-select': '0px 12px 24px rgba(0, 0, 0, 0.16)',
        soft: '0px 4px 8px rgba(0, 0, 0, 0.02), 0px 8px 16px rgba(0, 0, 0, 0.02), 0px 12px 20px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02);',
        subtle: '0 32px 40px 0 rgba(18, 22, 25, 0.04)',
        'subtle-hard': '0 32px 40px 0 rgba(18, 22, 25, 0.08)',
      },
    },
    colors: {
      transparent: 'rgb(0,0,0,0)',
      transparentw: 'rgb(255,255,255,0)',
      current: 'currentColor',
      black: 'rgb(0,0,0)',
      'black-75': 'rgba(0,0,0,.75)',
      white: 'rgb(255,255,255)',
      // NEW DESIGN SYSTEM
      primary: 'rgb(0,102,255)',
      'primary-dark': 'rgb(0,88,219)',
      'red-std': 'rgb(255,13,0)',
      'red-std-transparent': 'rgba(255, 13, 0, 0.08)',
      'red-dark': 'rgb(230,11,0)',
      'pcComponentes-orange': '#F26122',
      orange: 'rgb(255,149,0)',
      'orange-dark': 'rgb(230,134,0)',
      yellow: 'rgb(255,204,0)',
      'yellow-dark': 'rgb(230,184,0)',
      green: 'rgb(50,195,86)',
      'green-dark': 'rgb(45,174,77)',
      pink: 'rgb(255,36,76)',
      'pink-dark': 'rgb(235,0,63)',
      indigo: 'rgb(81,78,212)',
      'indigo-dark': 'rgb(60,58,207)',
      teal: 'rgb(50,182,205)',
      'teal-dark': 'rgb(45,164,185)',
      mint: 'rgb(5,189,180)',
      'mint-dark': 'rgb(4,164,156)',
      gray: {
        1: 'rgb(249,249,252)',
        5: 'rgb(243,243,248)',
        10: 'rgb(229,229,235)',
        20: 'rgb(209,209,215)',
        30: 'rgb(199,199,205)',
        40: 'rgb(174,174,179)',
        50: 'rgb(142,142,148)',
        60: 'rgb(99,99,103)',
        70: 'rgb(72,72,75)',
        80: 'rgb(58,58,59)',
        90: 'rgb(44,44,48)',
        100: 'rgb(24,24,27)',
      },
      // OLD DESIGN SYSTEM
      'cool-gray': {
        5: 'rgb(249,250,252)',
        10: 'rgb(242,244,248)',
        20: 'rgb(221,225,230)',
        30: 'rgb(193,199,205)',
        40: 'rgb(162,169,176)',
        50: 'rgb(135,141,150)',
        60: 'rgb(105,112,119)',
        70: 'rgb(77,83,88)',
        80: 'rgb(52,58,63)',
        90: 'rgb(33,39,42)',
        100: 'rgb(18,22,25)',
      },
      red: {
        10: 'rgb(255,241,241)',
        20: 'rgb(255,215,217)',
        30: 'rgb(255,179,184)',
        40: 'rgb(255,131,137)',
        50: 'rgb(250,77,86)',
        60: 'rgb(218,30,40)',
        70: 'rgb(162,25,31)',
        80: 'rgb(117,14,19)',
        90: 'rgb(82,4,8)',
        100: 'rgb(45,7,9)',
      },
      neutral: {
        10: 'rgb(250,251,252)',
        20: 'rgb(244,245,247)',
        30: 'rgb(235,236,240)',
        40: 'rgb(223,225,230)',
        50: 'rgb(193,199,208)',
        60: 'rgb(179,186,197)',
        70: 'rgb(165,173,186)',
        80: 'rgb(151,160,175)',
        100: 'rgb(122,134,154)',
        200: 'rgb(107,119,140)',
        300: 'rgb(94,108,132)',
        400: 'rgb(80,95,121)',
        500: 'rgb(66,82,110)',
        600: 'rgb(52,69,99)',
        700: 'rgb(37,56,88)',
        800: 'rgb(23,43,77)',
        900: 'rgb(9,30,66)',
      },
    },
    transitionDuration: {
      DEFAULT: '150ms',
      0: '0ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      250: '250ms',
      300: '300ms',
      350: '350ms',
      400: '400ms',
      450: '450ms',
      500: '500ms',
      550: '550ms',
      600: '600ms',
      650: '650ms',
      700: '700ms',
      750: '750ms',
      800: '800ms',
      850: '850ms',
      900: '900ms',
      950: '950ms',
      1000: '1000ms',
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
