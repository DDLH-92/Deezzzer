Dizzzer
Welcome to Dizzzer, a music application that uses the Deezer API to allow you to discover the top 10 and top 100 songs. You can listen to music using the integrated music player.

How to use Dizzzer
Clone this repo to your local machine:

bash
Copy code
git clone https://github.com/username/dizzzer.git
In your terminal, navigate to the dizzzer directory:

bash
Copy code
cd dizzzer
Install dependencies:

Copy code
npm install
Start the server:

Copy code
node proxy.js
Start the application:

arduino
Copy code
npm run dev
Open your preferred browser and navigate to http://localhost:3000

Dependencies used
Vue.js 3 - Progressive JavaScript framework
Vue Router - Routing library for Vue.js
Pinia - State management for Vue.js
Pinia Plugin Persistedstate - Plugin for state persistence with Pinia
Vue3-Carousel - Carousel component for Vue.js 3
Axios - JavaScript library for making HTTP requests
Express.js - Web application framework for Node.js
Request - Simplified HTTP library for Node.js
Uniqolor - Random color generation library
Vue Material Design Icons - Icon pack for Vue.js
Animate.css - CSS animation library
Tailwind CSS - Leading CSS design framework

Notes
The application uses a proxy to avoid CORS errors when using the Deezer API. To start the proxy, run node proxy.js in your terminal before starting the application.
