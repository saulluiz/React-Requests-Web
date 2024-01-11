/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                CorTextForm: '#160440 ',

                corA: ' #FCE46D',
                corB: '  #A1140A ',
                corC: '  #160440 ',
                corD: '  #08C952',
                corE: '  #EDCF6B ',

                corR1: '#02afc5	',
                corR2: '#35c9dd',
                corR3: ' #87d1db',
                corR4: '#a9f3fd',
                corR5: '#4cb5c3',

                corM1: '#1c3042	',
                corM2: '#697a82	',
                corM3: '#99a5b3	',
                corM4: '#5a5c6d	',
                corM5: '#b94150	',
            },
        },
    },
    plugins: [],
};
