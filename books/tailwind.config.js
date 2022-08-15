module.exports = {
    //...

    content: ['./src/**/*.{html,js,ts'],
    plugins: [require("daisyui")],
    
    theme:{
        container: {
            center: true,
        },

        card: {
            center: true,
        }
    },

    daisyui:{
        themes: ["light", "dark", "cupcake", "dracula"]
    },

  }