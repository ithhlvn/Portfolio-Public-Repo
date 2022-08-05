<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    name: "FirstPage",
})
</script>

<template>
    <div id="DataForms">
        <form action="http://localhost:3001/api" method="post" data-aos="fade-down">

            <div class="title" data-aos="fade-down">
                <h1>Hello!</h1>
            </div>

            <div>
                <input data-aos="fade-up" type="FirstName" id="FirstName" name="FirstName" placeholder="FirstName"
                    required>
            </div>

            <div>
                <input data-aos="fade-down" type="LastName" id="LastName" name="LastName" placeholder="LastName"
                    required>
            </div>

            <div>
                <input data-aos="fade-up" type="Email" id="Email" name="Email" placeholder="Email" required>
            </div>

            <div>
                <textarea data-aos="fade-down" name="Message" id="Message" type="Message" cols="30" rows="10"
                    placeholder="Message or Email"></textarea>
            </div>

            <button data-aos="fade-up" type="submit">Submit</button>
        </form>
    </div>
</template>

<style lang="css" scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap');
/* Forms */
#DataForms {
    display: flex;
    background-color: #1f2937;
    height: 100vh;
}
.title {
    padding: 10px;
    
}
.title h1{
    font-family: "Ubuntu", sans-serif;
    letter-spacing: 2px;
    font-weight: 900;
    font-size: 36px;
}
form {
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 5px #121212;
    background-color: whitesmoke;
    height: 68vh;
    width: 35vw;
    border-radius: 12px;
    margin: auto auto;
}

input {
    margin: 1rem 0;
    height: 5vh;
    width: 28vw;
    border-radius: 12px;
    border: 0;
    font-size: 18px;
    padding: 10px;
}

textarea {
    margin: 1rem 0;
    height: 25vh;
    width: 28vw;
    border: 0;
    border-radius: 12px;
    font-size: 18px;
    padding: 10px;
}
button {
    margin: 0.1rem 0;
    border-radius: 12px;
    border-color: #263344;
    background-color: #263344;
    border-style: solid;
    cursor: pointer;
    font-size: 16px;
    color: white;
    padding: 10px 30px;
}

button:hover {
    transition: 0.3s ease all;
    background-color: transparent;
    color: #121212;
}

@media (max-width: 1280px) {
    form {
        height: 75vh;
        width: 35vw;
    }
}
@media (max-width: 992px) {
    form {
        height: 66vh;
    }
    input {
        margin: 0.9vh auto;
    }

    textarea {
        margin: 0.9vh auto;
    }
}

@media (max-width: 768px) {
    form {
        width: 70vw;
    }
    input, textarea {
        width: 60vw;
    }
    button {
        margin: 2vh auto;
    }
}

@media (max-width: 480px) {
    form {
        width: 80vw;
    }
    input, textarea {
        width: 70vw;
    }
    button {
        margin: 2vh auto;
    }
 
}
@media (max-width: 380px) {
    button {
        margin: 1vh auto;
    }
}


</style>