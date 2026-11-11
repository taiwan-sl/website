const app = Vue.createApp({
    data() {
        return {
            Services: [
                // { "icon": "fa-shopping-cart", "title": "E-Commerce", "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur porro laborum fuga repellat." },
                // { "icon": "fa-laptop", "title": "Responsive Design", "desc": "Lorem ipsum dolor sit" },
                // { "icon": "fa-lock", "title": "Web Security", "desc": "Lorem ipsum dolor sit" }
            ]
        }
    }
})
app.mount('#services')

const portfolioApp = Vue.createApp({
    data() {
        return {
            Portfolio: [
                { "id": 1, "image": "img/portfolio/roundicons.png", "title": "Round Icons", "category": "Graphic Design" },
                { "id": 2, "image": "img/portfolio/startup-framework.png", "title": "Startup Framework", "category": "Website Design" },
                { "id": 3, "image": "img/portfolio/treehouse.png", "title": "Treehouse", "category": "Website Design" },
                { "id": 4, "image": "img/portfolio/golden.png", "title": "Golden", "category": "Website Design" },
                { "id": 5, "image": "img/portfolio/escape.png", "title": "Escape", "category": "Website Design" },
                { "id": 6, "image": "img/portfolio/dreams.png", "title": "Dreams", "category": "3D Design" }
            ]
        }
    }
})
portfolioApp.mount('#portfolio')

//Get data from Server
// app.Services=[]
//$.ajax()              