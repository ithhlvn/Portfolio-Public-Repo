<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ThirdPage",
})
</script>

<!-- Page -->
<template>
    <div id="myskills">
        <div class="grp-card-skills">
            <div class="card-skills" data-aos="fade-down">
                <i class="fa-solid fa-paintbrush" data-aos="fade-up"></i>
                <h1 data-aos="fade-down">Web Developer</h1>
                <h2 data-aos="fade-up">React, Next & Vue</h2>
            </div>
            <div class="card-skills" data-aos="fade-up">
                <i class="fa-solid fa-code" data-aos="fade-down"></i>
                <h1 data-aos="fade-up">Software Developer</h1>
                <h2 data-aos="fade-down">Python & C++</h2>
            </div>
            <div class="card-skills" data-aos="fade-down">
                <i class="fa-solid fa-server" data-aos="fade-up"></i>
                <h1 data-aos="fade-down">Server Developer</h1>
                <h2 data-aos="fade-up">Nginx, http & https</h2>
            </div>
        </div>
    </div>
</template>

<!-- Styles -->
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* MySkills Cards */
#myskills {
    display: flex;
    height: 60vh;
    background-color: #1f2937;
}

#myskills .grp-card-skills {
    display: flex;
    justify-content: space-around;
    margin: auto auto;
    height: 40vh;
    width: 80rem;
    align-items: center;
}

#myskills .grp-card-skills .card-skills {
    height: 35vh;
    width: 55vw;
    background-color: #111827;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 2rem;
    border-radius: 12px;
}

#myskills .grp-card-skills .card-skills i {
    font-size: 70px;
    text-align: center;
    margin: 1.2rem auto;
    color: crimson;
}

#myskills .grp-card-skills .card-skills h1 {
    font-size: 30px;
    font-family: "Ubuntu", sans-serif;
    margin: 1.2rem auto;
}

#myskills .grp-card-skills .card-skills h2 {
    font-size: 26px;
    font-family: "Ubuntu", sans-serif;
    margin: 1.2rem auto;
}

@media (max-width: 1600px) {
    #myskills .grp-card-skills {
        display: flex;
        justify-content: space-around;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 55vw;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }
}

@media (max-width: 1400px) {
    #myskills .grp-card-skills {
        display: flex;
        justify-content: space-around;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 55vw;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }
}

@media (max-width: 1280px) {
    #myskills .grp-card-skills {
        display: flex;
        justify-content: space-around;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 55vw;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }
}

@media (max-width: 1024px) {
    #myskills .grp-card-skills {
        display: flex;
        justify-content: space-around;
        margin: auto auto;
        height: 40vh;
        width: 60rem;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 100%;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 1.2rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        font-family: "Ubuntu", sans-serif;
        text-align: center;
        margin: 1.2rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 1.2rem auto;
        text-align: center;
    }
}

@media (max-width: 992px) {
    #myskills .grp-card-skills {
        display: flex;
        justify-content: space-around;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 40vw;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 1.2rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 1.2rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 1.2rem auto;
        text-align: center;
    }
}

@media (max-width: 768px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 40rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 1.2rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 1.2rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 1.2rem auto;
    }
}

@media (max-width: 640px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 30rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 0.7rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }
}

@media (max-width: 560px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 25rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 0.7rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }
}

@media (max-width: 480px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 25rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 0.7rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }
}

@media (max-width: 420px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 20rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }
}

@media (max-width: 375px) {
    #myskills {
        height: 100vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 35vh;
        width: 20rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 0.7rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }
}

@media (max-width: 320px) {
    #myskills {
        height: 120vh;
    }

    #myskills .grp-card-skills {
        display: flex;
        flex-direction: column;
        margin: auto auto;
        height: 40vh;
        width: 100%;
        align-items: center;
    }

    #myskills .grp-card-skills .card-skills {
        height: 30vh;
        width: 20rem;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 1rem;
        border-radius: 12px;
    }

    #myskills .grp-card-skills .card-skills i {
        font-size: 60px;
        text-align: center;
        margin: 0.7rem auto;
        color: crimson;
    }

    #myskills .grp-card-skills .card-skills h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }

    #myskills .grp-card-skills .card-skills h2 {
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        margin: 0.7rem auto;
    }
}
</style>