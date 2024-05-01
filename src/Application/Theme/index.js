import { createTheme } from '@mui/material'

const MEDIA_SIZE = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }

export const theme = createTheme({
    palette: {
        primary: {
            main: '#145CA8',
            light: '#B5D4F6',
            medium: '#98C4F2',
            dark: '#5AA1EC',
        },
        secondary: {
            main: '#FDEAB6',
            dark: '#F9DB6D',
        },
        white: {
            main: '#FBFDFF',
        },
        black: {
            main: '#72859A',
            light: '#B5D4F6',
            medium: ' #0C0E10',
            dark: '#2E353E',
        },
        yellow: { main: '#F9DB6D' },
    },
    typography: {
        fontFamily: 'Raleway, sans-serif',
        fontWeight: {
            light: 300,
            regular: 400,
            normal: 500,
            bold: 600,
        },
        h1: {
            fontSize: '60px',
            lineHeight: 'auto',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '48px',
            lineHeight: 'auto',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '40px',
            lineHeight: 'auto',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '24px',
            lineHeight: 'auto',
            fontWeight: 'bold',

            '@media (max-width:767px)': {
                fontSize: '18px',
            },
        },
        h5: {
            fontSize: '20px',
            lineHeight: 'auto',
            fontWeight: 'regular',
        },
        h6: {
            fontSize: '18px',
            lineHeight: 'auto',
            fontWeight: 'regular',
        },
        body1: {
            fontSize: '16px',
            lineHeight: 'auto',
        },
        body2: {
            fontSize: '14px',
            lineHeight: 'auto',
        },
        body3: {
            fontSize: '12px',
            lineHeight: 'auto',
        },
    },
    shadows: [
        '4px 4px 8px rgba(0, 0, 0, 0.15)',
        '0px 1px 8px rgba(0, 0, 0, 0.05)',
        '0px 0px 8px 0px #00000040',
        'none',
        'none',
    ],

    breakPoints: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        up: (value) => {
            if (MEDIA_SIZE[value]) return `@media screen and width >= ${MEDIA_SIZE[value]})`
        },
        down: (value) => {
            if (MEDIA_SIZE[value]) return `@media screen and width <= ${MEDIA_SIZE[value]})`
        },
    },
})
