<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FifthPage",
})
</script>

<!-- Page -->
<template>
    <!-- Social -->
    <div id="social">
        <div class="grp-card-social">
            <div class="card-social" data-aos="fade-down">
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/Chysev">
                    GitHub
                </a>
            </div>
            <div class="card-social" data-aos="fade-up">
                <i class="fa-brands fa-facebook"></i>
                <a href="https://facebook.com/Chysev">
                    Facebook
                </a>
            </div>
        </div>
    </div>
</template>

<!-- Styles -->
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* Social */
#social {
    display: flex;
    height: 70vh;
    background-color: #1f2937;
}

#social .grp-card-social {
    display: flex;
    justify-content: space-around;
    margin: auto auto;
    height: 40vh;
    width: 80rem;
    align-items: center;
}

#social .grp-card-social .card-social {
    height: 35vh;
    width: 20vw;
    background-color: #111827;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 2rem;
    border-radius: 12px;
}

#social .grp-card-social .card-social i {
    font-size: 100px;
    text-align: center;
    margin: 1.2rem auto;
    color: crimson;
}

#social .grp-card-social .card-social a {
    font-size: 30px;
    font-family: "Ubuntu", sans-serif;
    color: blue;
    margin: 1.2rem auto;
}

@media (max-width: 1024px) {
    #social .grp-card-social .card-social {
        height: 35vh;
        width: 20vw;
        background-color: #111827;
        color: whitesmoke;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 2rem;
        border-radius: 12px;
    }
}

@media (max-width: 768px) {
    #social {
        display: flex;
        height: 50vh;
        background-color: #1f2937;
    }

    #social .grp-card-social {
        display: flex;
        flex-direction: column;
    }

    #social .grp-card-social .card-social {
        width: 80%;
        height: 35vh;
        margin: 1rem auto;
    }
}

@media (max-width: 640px) {
    #social {
        display: flex;
        height: 100vh;
        background-color: #1f2937;
    }

    #social .grp-card-social {
        display: flex;
        flex-direction: column;
    }

    #social .grp-card-social .card-social {
        width: 80%;
        height: 35vh;
        margin: 2rem auto;
    }
}

@media (max-width: 560px) {
    #social {
        display: flex;
        height: 100vh;
        background-color: #1f2937;
    }

    #social .grp-card-social {
        display: flex;
        flex-direction: column;
    }

    #social .grp-card-social .card-social {
        width: 80%;
        height: 35vh;
        margin: 2rem auto;
    }
}
</style>