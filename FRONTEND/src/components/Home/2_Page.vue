<script lang="ts">
// Import Files
import VSCODE from '../../public/assets/icons/visual-studio-code.png'
import HTML from '../../public/assets/icons/html.png'
import CSS from '../../public/assets/icons/css.png'
import JS from '../../public/assets/icons/javascript.png'
import VUE from '../../public/assets/icons/vuejs-brands.svg'
import NODEJS from '../../public/assets/icons/nodejs.png'
import MONGO from '../../public/assets/icons/mongodb.png'
import GIT from '../../public/assets/icons/git.png'
import GITHUB from '../../public/assets/icons/git.png'
import TERMINAL from '../../public/assets/icons/terminal.png'
import LAYDA from '../../public/assets/images/Layda.png'

import { defineComponent } from 'vue'


export default defineComponent({
    name: "SecondPage",
    data() {
        return {
            VSCODE,
            HTML,
            CSS,
            JS,
            VUE,
            NODEJS,
            MONGO,
            GIT,
            GITHUB,
            TERMINAL,
            LAYDA,
        }
    }
})

</script>

<!-- Page -->
<template>
    <div id="aboutme">
        <div class="container">
            <div class="left" data-aos="fade-down">
                <img :src="LAYDA" alt="Layda">
            </div>
            <div class="right">
                <h1 data-aos="fade-down">Hi I am John Layda</h1>
                <h2 data-aos="fade-up">I am John Layda. A Programmer, Web Developer, Student GitHub Developer and a
                    Basketball player. I am
                    currently a Senior High School Student Studying in The Philippine School Dubai.</h2>
                <div class="down">
                    <h1 data-aos="fade-down">Language and Tools</h1>
                    <img data-aos="fade-up" :src="VSCODE" alt="VSCODE">
                    <img data-aos="fade-down" :src="HTML" alt="HTML">
                    <img data-aos="fade-up" :src="CSS" alt="CSS">
                    <img data-aos="fade-down" :src="JS" alt="JAVASCRIPT">
                    <img data-aos="fade-up" :src="VUE" alt="REACT">
                    <img data-aos="fade-down" :src="NODEJS" alt="NODEJS">
                    <img data-aos="fade-up" :src="MONGO" alt="MONGODB">
                    <img data-aos="fade-down" :src="GIT" alt="GIT">
                    <img data-aos="fade-up" :src="GITHUB" alt="GITHUB">
                    <img data-aos="fade-down" :src="TERMINAL" alt="TERMINAL">
                </div>
                <div class="grp-btn" data-aos="fade-up">
                    <a href="#myskills"><button class="MySkills">My Skills</button></a>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Styles -->
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* About Me */
#aboutme {
    display: flex;
    height: 60vh;
    background-color: rgb(248, 247, 247);
}

#aboutme .container {
    display: flex;
    justify-content: space-around;
    width: 65%;
    align-items: center;
    margin: auto auto;
}

#aboutme .container .left {
    height: 400px;
    width: 400px;
    margin: auto 3.48rem;
}

#aboutme .container .left img {
    object-fit: cover;
    height: 400px;
    width: 400px;
}

#aboutme .container .right {
    margin: auto auto;
    width: 50%;
}

#aboutme .container .right h1 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    margin: 0.1em auto;
}

#aboutme .container .right h2 {
    font-family: "Poppins", sans-serif;
    text-align: justify;
    font-size: 18px;
    font-weight: 400;
    margin: 0.1em auto;
}

#aboutme .container .right .down h1 {
    font-family: "Poppins", sans-serif;
    font-size: 22px;
    margin: 0.2em auto;
}

#aboutme .container .right .down img {
    height: 30px;
    width: 30px;
    margin: auto 0.2rem;
}

.MySkills {
    background-color: #dc143c;
    border-color: #dc143c;
    margin: 0.5rem 0.2rem;
    font-size: 20px;
    color: white;
    display: inline-block;
    border-radius: 7px;
    padding: 10px 30px;
    cursor: pointer;
    border-style: solid;
}

.MySkills:hover {
    background-color: transparent;
    transition: ease 0.3s;
    color: crimson;
}

@media (max-width: 1600px) {

    /* About Me */
    #aboutme {
        height: 70vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        justify-content: space-around;
        width: 68%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 400px;
        width: 600px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 400px;
        width: 400px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 60%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 1400px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        justify-content: space-around;
        width: 68%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 350px;
        width: 650px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 350px;
        width: 350px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 1280px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        justify-content: space-around;
        width: 80%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 350px;
        width: 650px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 350px;
        width: 350px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 1024px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        justify-content: space-around;

        width: 80%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 310px;
        width: 510px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 310px;
        width: 310px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 992px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        justify-content: space-around;
        width: 80%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 310px;
        width: 510px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 310px;
        width: 310px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 80%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 768px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 310px;
        width: 310px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 310px;
        width: 310px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 640px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 260px;
        width: 260px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 260px;
        width: 260px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 560px) {

    /* About Me */
    #aboutme {
        height: 85vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 300px;
        width: 290px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 290px;
        width: 290px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 480px) {

    /* About Me */
    #aboutme {
        height: 85vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 290px;
        width: 270px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 270px;
        width: 270px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 420px) {

    /* About Me */
    #aboutme {
        height: 80vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 290px;
        width: 270px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 270px;
        width: 270px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 375px) {

    /* About Me */
    #aboutme {
        min-height: 90vh;
        max-height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 280px;
        width: 260px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 260px;
        width: 260px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}

@media (max-width: 320px) {

    /* About Me */
    #aboutme {
        height: 100vh;
        display: flex;
    }

    #aboutme .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        margin: auto auto;
    }

    #aboutme .container .left {
        height: 250px;
        width: 230px;
        margin: 10px;
    }

    #aboutme .container .left img {
        height: 230px;
        width: 230px;
        margin: auto auto;
    }

    #aboutme .container .right {
        margin: auto auto;
        width: 90%;
    }

    #aboutme .container .right h1 {
        font-family: "Poppins", sans-serif;
        font-size: 25px;
        margin: 0.1em auto;
    }

    #aboutme .container .right h2 {
        font-family: "Poppins", sans-serif;
        text-align: justify;
        font-size: 16px;
        margin: 0.1em auto;
    }

    #aboutme .container .right .down h1 {
        font-family: "Poppins", sans-serif;
        font-size: 23px;
        margin: 0.2em auto;
    }

    #aboutme .container .right .down img {
        height: 25px;
        width: 25px;
        margin: auto 0.2rem;
    }
}
</style>