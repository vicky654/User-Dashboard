/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--color-primary, 45, 139, 186, 1) / <alpha-value>)',
                    light: 'rgb(var(--color-primary-light, 234 241 255) / <alpha-value>)',
                    'dark-light': 'var(--color-primary-dark-light, rgba(67,97,238,0.15))',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--color-secondary, 128 93 202) / <alpha-value>)',
                    light: 'rgb(var(--color-secondary-light, 235 228 247) / <alpha-value>)',
                    'dark-light': 'var(--color-secondary-dark-light, rgba(128,93,202,0.15))',
                },
                success: {
                    DEFAULT: '#00ab55',
                    light: '#ddf5f0',
                    'dark-light': 'rgba(0,171,85,.15)',
                },
                danger: {
                    DEFAULT: '#e7515a',
                    light: '#fff5f5',
                    'dark-light': 'rgba(231,81,90,.15)',
                },
                warning: {
                    DEFAULT: '#e2a03f',
                    light: '#fff9ed',
                    'dark-light': 'rgba(226,160,63,.15)',
                },
                info: {
                    DEFAULT: '#2196f3',
                    light: '#e7f7ff',
                    'dark-light': 'rgba(33,150,243,.15)',
                },
                dark: {
                    DEFAULT: '#3b3f5c',
                    light: '#eaeaec',
                    'dark-light': 'rgba(59,63,92,.15)',
                },
                black: {
                    DEFAULT: '#0e1726',
                    light: '#e3e4eb',
                    'dark-light': 'rgba(14,23,38,.15)',
                },
                white: {
                    DEFAULT: '#ffffff',
                    light: '#e0e6ed',
                    dark: '#888ea8',
                },
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                // Mobile-first responsive font sizes
                'heading-lg': ['1rem', { lineHeight: '2.25rem', letterSpacing: '0.02em' }], // 30px
                'heading-md': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.02em' }], // 24px
                'heading-sm': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.02em' }], // 20px
                'subtext': ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.02em' }], // 18px
            },
            spacing: {
                4.5: '18px',
            },
            boxShadow: {
                '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-invert-headings': theme('colors.white.dark'),
                        '--tw-prose-invert-links': theme('colors.white.dark'),
                        h1: {
                            fontSize: theme('fontSize.heading-lg')[0],
                            lineHeight: theme('fontSize.heading-lg')[1].lineHeight,
                            letterSpacing: theme('fontSize.heading-lg')[1].letterSpacing,
                            marginBottom: '0.5rem',
                            marginTop: 0,
                        },
                        h2: {
                            fontSize: theme('fontSize.heading-md')[0],
                            lineHeight: theme('fontSize.heading-md')[1].lineHeight,
                            letterSpacing: theme('fontSize.heading-md')[1].letterSpacing,
                            marginBottom: '0.5rem',
                            marginTop: 0,
                        },
                        h3: {
                            fontSize: theme('fontSize.heading-sm')[0],
                            lineHeight: theme('fontSize.heading-sm')[1].lineHeight,
                            letterSpacing: theme('fontSize.heading-sm')[1].letterSpacing,
                            marginBottom: '0.5rem',
                            marginTop: 0,
                        },
                        h4: {
                            fontSize: theme('fontSize.subtext')[0],
                            lineHeight: theme('fontSize.subtext')[1].lineHeight,
                            letterSpacing: theme('fontSize.subtext')[1].letterSpacing,
                            marginBottom: '0.5rem',
                            marginTop: 0,
                        },
                        h5: { fontSize: '1rem', marginBottom: '0.5rem', marginTop: 0 }, // 16px
                        h6: { fontSize: '0.875rem', marginBottom: '0.5rem', marginTop: 0 }, // 14px
                        p: { marginBottom: '0.5rem' },
                        li: { margin: 0 },
                        img: { margin: 0 },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms')({ strategy: 'class' }),
        require('@tailwindcss/typography'),
        rotateX,
    ],
};
