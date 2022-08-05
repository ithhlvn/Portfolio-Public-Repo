<script lang="ts">
import NODEJS from '../../public/assets/icons/nodejs.png'
import PageClip from '../../public/assets/icons/sql.png'
import HTML from '../../public/assets/icons/html.png'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FirstPage",
    data() {
        return {
            NODEJS,
            PageClip,
            HTML,
        }
    }
 })
</script>

<template>
    <div id="opensource">
        <div class="grp-card-source">
            <div class="card-source">
                <img :src="NODEJS" alt="">
                <h1>Express Ejs App with AOS</h1>
                <p>Easy to setup and understand the codes</p>
                <a href="https://github.com/Chysev/express-ejs-app"><button>Visit</button></a>
            </div>

            <div class="card-source">
                <img :src="PageClip" alt="">
                <h1>PageClip Server</h1>
                <p>Contact Page with PageClip Server Database</p>
                <a href="https://github.com/Chysev/pageclipstaticweb"><button>Visit</button></a>
            </div>

            <div class="card-source">
                <img :src="NODEJS" alt="">
                <h1>Shop Website</h1>
                <p>Built with Express, Ejs and Nedb Database</p>
                <a href="https://github.com/Chysev/Shop"><button>Visit</button></a>
            </div>

            <div class="card-source">
                <img :src="HTML" alt="">
                <h1>Minecraft Website</h1>
                <p>A Minecraft Website built with pure HTML, CSS and JAVASCRIPT</p>
                <a href="https://github.com/Chysev/Minecraft_Website"><button>Visit</button></a>
            </div>

            <div class="card-source">
                <img :src="NODEJS" alt="">
                <h1>Express SSL</h1>
                <p>Express with SSL for begginers who do not know how to start an app with SSL</p>
                <a href="https://github.com/Chysev/ExpressSSL"><button>Visit</button></a>
            </div>


        </div>
    </div>
</template>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap");

#opensource {
    display: flex;
    font-family: "Ubunut", sans-serif;
    background-color: #111827;
}

.grp-card-source {
    display: flex;
    flex-direction: column;
    margin: 10rem auto;
    align-items: center;
}

img {
    height: 100px;
    width: 100px;
}

.card-source {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    color: white;
    box-shadow: 0 0 6px #111827;
    background-color: #1f2937;
    width: auto;
    height: auto;
    border-radius: 12px;
    padding: 10px;
}

h1 {
    font-size: 40px;
}

p {
    font-size: 20px;
    text-align: center;
    width: 30rem;
}

img,
h1,
p {
    margin: 0.5rem;
}

button {
    padding: 10px 40px;
    border-radius: 12px;
    border-color: #0e0e90;
    background-color: #0e0e90;
    color: white;
    font-size: 16px;
    font-weight: 900;
    border-style: solid;
    cursor: pointer;
    margin: 1.2rem 0;
}

button:hover {
    background-color: transparent;
}

@media (max-width: 1280px) {
    .card-source {
        height: auto;
        width: auto;
    }

    img,
    h1,
    p {
        margin: 0.3rem;
        text-align: center;
    }

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 13px;
        width: 25rem;
    }

    button {
        margin: 1rem;
    }
}

@media (max-width: 1024px) {
    .card-source {
        height: auto;
        width: auto;
    }

    p {
        width: 20rem;
    }

    img,
    h1,
    p {
        margin: 0.3rem;
        text-align: center;
    }
}

@media (max-width: 992px) {
    .card-source {
        height: auto;
    }

    h1 {
        font-size: 25px;
    }

    p {
        width: 20rem;
    }

    img,
    h1,
    p {
        margin: 0.1rem;
        text-align: center;
    }

    .card-source {
        height: auto;
        width: auto;
    }
}

@media (max-width: 768px) {
    .card-source {
        height: auto;
        width: auto;
    }

    h1 {
        font-size: 30px;
    }

    p {
        width: 20rem;
    }

    p {
        font-size: 18px;
    }

    img,
    h1,
    p {
        margin: 0.1rem;
        text-align: center;    }

    .card-source {
        height: auto;
        width: auto;
    }
}
@media (max-width: 640px) {
    .card-source {
        height: auto;
        width: auto;
    }
    h1 {
        font-size: 20px;
    }
    button {
        margin: auto auto;
    }
}
@media (max-width: 480px) {
    h1 {
        font-size: 25px;
    }
    p {
        font-size: 16px;
        width: 20rem;
    }
    button {
        margin: auto auto;
    }
}
</style>