module.exports = {
    content: [
        "./theme/templates/**/*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}