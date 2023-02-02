import '@mui/material/Typography';
import '@mui/material/styles/createPalette';

import type {
    Palette as OriginalPalette,
    PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';
// import type { TypographyOptions } from '@mui/material/styles/createTypography';
import type * as React from 'react';

interface NeutralsPalette {
    primaryDark: string;
    darkestGrey: string;
    grey: string;
    lightestBlue: string;
    lightGrey: string;
    lightestGrey: string;
    background: string;
}

interface GradientsPalette {
    bluePurple: string;
}

interface PaletteExtentions {
    neutrals: NeutralsPalette;
    purple: { main: string };
    gradients: GradientsPalette;
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        purple: true;
        neutral: true;
    }
}

declare module '@mui/material/styles/createPalette' {
    interface Palette extends OriginalPalette, PaletteExtentions { }

    interface PaletteOptions extends MuiPaletteOptions, PaletteExtentions { }

    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
        lightest?: string;
    }

    interface PaletteColor {
        lighter: string;
        darker: string;
        lightest: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1: false;
        body2: false;
        overline: false;
        label1: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        footnote: true;
        caption2: true;
        body: true;
        label: true;
        label2: true;
        caption: true;
        caption2: true;
    }
}

export interface ExtendedTypographyOptions
    extends Omit<TypographyOptions, 'h1'> {
    body: React.CSSProperties;
    caption: React.CSSProperties;
    caption2: React.CSSProperties;
    label: React.CSSProperties;
    label2: React.CSSProperties;
    footnote: React.CSSProperties;
}

declare module '@mui/material/styles' {
    interface Theme {
        typography: ExtendedTypographyOptions;
    }
}
