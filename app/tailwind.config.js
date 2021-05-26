// tailwind.config.js
module.exports = {
    purge: {
        enabled: false
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                '42': '10.5rem',
                '1/6': '16.666667%',
                '1/6+': '17.7%',
            },
            colors: {
                'snl-yellow': '#f2bf49',
                'snl-dark': '#375572',
                'snl-dark-lighter': '#3f6283',
                'snl-grey': '#4c4c4e',
            },
            height: {
                '92%': '92%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}