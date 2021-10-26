module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {
            fontFamily: {
                Poppins: "'poppins', sans-serif",
                Roboto: "'roboto' sans-serif",
            },
            colors: {
                'primary': '#676cb8',
                'secondary': '#3695cc'
            }
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            visibility: ['group-hover'],
        },
    },
    plugins: [],
}