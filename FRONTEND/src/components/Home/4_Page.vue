<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FourthPage",
})
</script>

<!-- Page -->
<template>
    <!-- MySkills Percent -->
    <div id="myskillspercent">
        <div class="container">
            <div class="title">
                <h1 data-aos="fade-down">Creative Skills and Experience</h1>
            </div>
            <div class="bars">
                <!-- HTML -->
                <div data-aos="fade-down" class="span-html">
                    <span>HTML</span>
                    <span class="percent-line">90%</span>
                </div>
                <div data-aos="fade-down" class="white-line">
                    <div data-aos="fade-down" class="red-html"></div>
                </div>

                <!-- CSS -->
                <div data-aos="fade-up" class="span-css">
                    <span>CSS</span>
                    <span class="percent-line">80%</span>
                </div>
                <div data-aos="fade-up" class="white-line">
                    <div data-aos="fade-up" class="red-css"></div>
                </div>

                <!-- JAVASCRIPT -->
                <div data-aos="fade-down" class="span-javascript">
                    <span>JAVASCRIPT</span>
                    <span class="percent-line">85%</span>
                </div>
                <div data-aos="fade-down" class="white-line">
                    <div data-aos="fade-down" class="red-javascript"></div>
                </div>

                <!-- PYTHON -->
                <div data-aos="fade-up" class="span-python">
                    <span>PYTHON</span>
                    <span class="percent-line">50%</span>
                </div>
                <div data-aos="fade-up" class="white-line">
                    <div data-aos="fade-up" class="red-python"></div>
                </div>

                <!-- C -->
                <div data-aos="fade-down" class="span-cplusplus">
                    <span>C++</span>
                    <span class="percent-line">30%</span>
                </div>
                <div data-aos="fade-down" class="white-line">
                    <div data-aos="fade-down" class="red-cplusplus"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Styles -->
<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* MySkillsPercent */
#myskillspercent {
    height: 60vh;
    display: flex;
    background-color: whitesmoke;
}

#myskillspercent .container {
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#myskillspercent .container h1 {
    font-size: 32px;
    font-family: "Ubuntu", sans-serif;
}

.bars {
    margin: auto;
    font-family: "Ububtu", sans-serif;
}

.span-html,
.span-css,
.span-javascript,
.span-python,
.span-cplusplus {
    display: flex;
    justify-content: space-between;
}

.white-line {
    background-color: white;
    height: 1.3rem;
    width: 40rem;
    margin: 0.5rem 0;
    border-radius: 12px;
}

.red-html {
    background: red;
    height: 1.3rem;
    width: 35rem;
    border-radius: 12px;
}

.red-css {
    background: red;
    height: 1.3rem;
    width: 25rem;
    border-radius: 12px;
}

.red-javascript {
    background: red;
    height: 1.3rem;
    width: 30rem;
    border-radius: 12px;
}

.red-python {
    background: red;
    height: 1.3rem;
    width: 20rem;
    border-radius: 12px;
}

.red-cplusplus {
    background: red;
    height: 1.3rem;
    width: 15rem;
    border-radius: 12px;
}

@media (max-width: 1280px) {
    #myskillspercent {
        height: 100vh;
        display: flex;
        background-color: whitesmoke;
    }
    #myskillspercent .container {
        display: flex;
        margin: auto;
        align-items: center;
        flex-direction: column;
        width: 80%;
    }
}

@media (max-width: 768px) {
    #myskillspercent {
        height: 70vh;
    }

    .bars {
        margin: auto auto;
    }

    #myskillspercent .container {
        display: flex;
        margin: auto;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    #myskillspercent .container h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
    }

    .white-line {
        background-color: white;
        height: 1.3rem;
        width: 30rem;
        margin: 0.2rem 0rem;
        border-radius: 12px;
    }

    .red-html {
        background: red;
        height: 1.3rem;
        width: 27rem;
        border-radius: 12px;
    }

    .red-css {
        background: red;
        height: 1.3rem;
        width: 24rem;
        border-radius: 12px;
    }

    .red-javascript {
        background: red;
        height: 1.3rem;
        width: 25.5rem;
        border-radius: 12px;
    }

    .red-python {
        background: red;
        height: 1.3rem;
        width: 15rem;
        border-radius: 12px;
    }

    .red-cplusplus {
        background: red;
        height: 1.3rem;
        width: 9rem;
        border-radius: 12px;
    }
}

@media (max-width: 480px) {
    #myskillspercent {
        height: 70vh;
    }

    #myskillspercent .container {
        display: flex;
        margin: auto;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    #myskillspercent .container h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
    }

    .white-line {
        background-color: white;
        height: 1.3rem;
        width: 20rem;
        margin: 0.2rem 0rem;
        border-radius: 12px;
    }

    .red-html {
        background: red;
        height: 1.3rem;
        width: 18rem;
        border-radius: 12px;
    }

    .red-css {
        background: red;
        height: 1.3rem;
        width: 16rem;
        border-radius: 12px;
    }

    .red-javascript {
        background: red;
        height: 1.3rem;
        width: 17rem;
        border-radius: 12px;
    }

    .red-python {
        background: red;
        height: 1.3rem;
        width: 10rem;
        border-radius: 12px;
    }

    .red-cplusplus {
        background: red;
        height: 1.3rem;
        width: 6rem;
        border-radius: 12px;
    }
}

@media (max-width: 375px) {
    #myskillspercent {
        height: 70vh;
    }

    #myskillspercent .container {
        display: flex;
        margin: auto;
        align-items: center;
        flex-direction: column;
        width: 80%;
    }

    #myskillspercent .container h1 {
        font-size: 27px;
        text-align: center;
        font-family: "Ubuntu", sans-serif;
    }

    .white-line {
        background-color: white;
        height: 1.3rem;
        width: 15rem;
        margin: 0.2rem 0rem;
        border-radius: 12px;
    }

    .red-html {
        background: red;
        height: 1.3rem;
        width: 13.5rem;
        border-radius: 12px;
    }

    .red-css {
        background: red;
        height: 1.3rem;
        width: 12rem;
        border-radius: 12px;
    }

    .red-javascript {
        background: red;
        height: 1.3rem;
        width: 12.8rem;
        border-radius: 12px;
    }

    .red-python {
        background: red;
        height: 1.3rem;
        width: 7.5rem;
        border-radius: 12px;
    }

    .red-cplusplus {
        background: red;
        height: 1.3rem;
        width: 4.5rem;
        border-radius: 12px;
    }
}
</style>