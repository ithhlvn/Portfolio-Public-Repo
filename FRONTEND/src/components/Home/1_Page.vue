<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FirstPage",
})
</script>

<!-- Page -->
<template>
    <div id="introduction">
        <div class="container" data-aos="fade-down">
            <p>Hello, my name is</p>
            <h1>John Layda</h1>
            <h2 class="mx-auto ">
                A   <a class="typewrite" data-period="2500"
                    data-type='[ "Web Developer", "Programmer", "Basketball Player" ]'><span class="wrap"></span></a>
            </h2>
            <a href="#aboutme">
                <button class="aboutme-btn">About Me</button>

            </a>
        </div>
    </div>
</template>

<!-- Styles -->
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* Main */
#introduction {
    display: flex;
    height: 100vh;
    background-color: #1f2937;
}

#introduction .container {
    color: whitesmoke;
    margin: auto;
    width: 59%;
    font-family: "Ubuntu", sans-serif;
}

#introduction .container p {
    font-size: 27px;
    margin: 7px 0px;
}

#introduction .container h1 {
    font-size: 75px;
    margin: 7px 0px;
}

#introduction .container h2 {
    font-size: 38px;
    margin: 7px 0px;
    font-weight: 600;
}

#introduction .container a {
    color: crimson;
    font-weight: 700;
}

.aboutme-btn {
    background-color: #dc143c;
    border-color: #dc143c;
    border-style: solid;
    margin: 20px 0px 0px;
    font-size: 25px;
    color: white;
    display: inline-block;
    font-family: "Ubuntu", sans-serif;
    border-radius: 6px;
    padding: 12px 36px;
    cursor: pointer;
}

.aboutme-btn:hover {
    background-color: transparent;
    transition: ease 0.3s;
}

@media (max-width: 1600px) {
    #introduction .container {
        margin: auto;
        min-width: 61%;
    }
}

@media (max-width: 1400px) {
    #introduction .container {
        margin: auto;
        min-width: 62.5%;
    }
}

@media (max-width: 1280px) {
    #introduction .container {
        margin: auto;

        min-width: 63.6%;
    }
}

@media (max-width: 1024px) {
    #introduction .container {
        margin: auto;
        min-width: 67%;
    }
}

@media (max-width: 992px) {
    #introduction .container {
        margin: auto;
        min-width: 67.6%;
    }
}

@media (max-width: 768px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        min-width: 67%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 60px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 640px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        min-width: 70%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 50px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 560px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        min-width: 72.9%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 50px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 480px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        min-width: 77%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 50px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 420px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        width: auto;
        min-width: 80%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 50px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 375px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        width: auto;
        min-width: 84%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 45px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}

@media (max-width: 320px) {

    /* Introduction */
    #introduction {
        display: flex;
        height: 100vh;
    }

    #introduction .container {
        color: whitesmoke;
        margin: auto;
        width: auto;
        min-width: 89%;
        font-family: "Ubuntu", sans-serif;
    }

    #introduction .container p {
        font-size: 24px;
        margin: 7px 0px;
    }

    #introduction .container h1 {
        font-size: 45px;
        margin: 7px 0px;
    }

    #introduction .container h2 {
        font-size: 27px;
        margin: 7px 0px;
    }
}
</style>

