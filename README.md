# Dizzzer

Welcome to Dizzzer, a music application that uses the Deezer API to allow you to discover the top 10 and top 100 songs. You can listen to music using the integrated music player.

## How to use Dizzzer 

1. Clone this repo to your local machine:
git clone https://github.com/username/dizzzer.git

2. In your terminal, navigate to the dizzzer directory:
cd deezzzer

3. Install dependencies:
npm install

4. Start the server:
node proxy.js

5. Start the application:
npm run dev


## Dependencies used

* [Vue.js 3](https://v3.vuejs.org/) - Progressive JavaScript framework 
* [Vue Router](https://router.vuejs.org/) - Routing library for Vue.js 
* [Pinia](https://pinia.esm.dev/) - State management for Vue.js 
* [Pinia Plugin Persistedstate](https://github.com/posva/pinia-plugin-persistedstate) - Plugin for state persistence with Pinia 
* [Vue3-Carousel](https://www.npmjs.com/package/vue3-carousel) - Carousel component for Vue.js 3 
* [Axios](https://github.com/axios/axios) - JavaScript library for making HTTP requests 
* [Express.js](https://expressjs.com/) - Web application framework for Node.js 
* [Request](https://www.npmjs.com/package/request) - Simplified HTTP library for Node.js 
* [Uniqolor](https://www.npmjs.com/package/uniqolor) - Random color generation library 
* [Vue Material Design Icons](https://www.npmjs.com/package/vue-material-design-icons) - Icon pack for Vue.js 
* [Animate.css](https://animate.style/) - CSS animation library 
* [Tailwind CSS](https://tailwindcss.com/) - Leading CSS design framework

## Notes 

The application uses a proxy to avoid CORS errors when using the Deezer API. To start the proxy, run `node proxy.js` in your terminal before starting the application.
