/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['var(--font-primary)'],
                secondary: ['var(--font-secondary)'],
            },
            fontSize: {
                small: 'var(--text-small)',
                regular: 'var(--text-regular)',
                large: 'var(--text-large)',
            },
        },
    },
    plugins: [],
}
