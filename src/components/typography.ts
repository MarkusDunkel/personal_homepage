import type { ExtendedTypographyOptions } from '../definitions/theme';

function pxToRem(value: number) {
    return `${value / 16}rem`;
}

const FONT_PRIMARY = 'Montserrat, sans-serif';

const typography: ExtendedTypographyOptions = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,

    h1: {
        fontWeight: 700,
        lineHeight: '60px',
        fontSize: pxToRem(48),
        // fontFamily: 'Satoshi-Variable, sans-serif',
    },
    h2: {
        fontWeight: 650,
        lineHeight: '40px',
        fontSize: pxToRem(34),
    },
    h3: {
        fontWeight: 700,
        lineHeight: '34px',
        fontSize: pxToRem(28),
    },
    h4: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
    },
    h5: {
        fontWeight: 600,
        lineHeight: '24px',
        fontSize: pxToRem(20),
    },
    label: {
        fontWeight: 1,
        lineHeight: '20px',
        fontSize: pxToRem(15),
        fontFamily: 'Montserrat, sans-serif',
    },
    // Card description
    label2: {
        fontWeight: 450,
        lineHeight: '20px',
        fontSize: pxToRem(15),
    },
    body: {
        lineHeight: '28px',
        fontSize: pxToRem(18),
        fontFamily: 'Montserrat, sans-serif',
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(40),
        fontFamily: 'Graphik',
        color: 'blue'
    },
    // Card headers
    caption2: {
        fontWeight: 500,
        lineHeight: '25px',
        fontSize: pxToRem(25),
        fontFamily: 'Montserrat, sans-serif',
    },
    footnote: {
        fontWeight: 400,
        lineHeight: '18px',
        fontSize: pxToRem(11),
    },
    button: {
        fontWeight: 650,
        lineHeight: '21px',
        fontSize: pxToRem(18),
        textTransform: 'none',
    },
};

export default typography;
