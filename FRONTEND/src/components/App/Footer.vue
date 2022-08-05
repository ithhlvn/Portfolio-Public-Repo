<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Footer",
    data() {
        return {
            Footer: "John Layda"
        }
    }
})
</script>


<template>
    <footer>
        <span>Created By <a href="/">{{Footer}}</a> | <span class="far fa-copyright"></span> All rights
            reserved.</span>
    </footer>
</template>

<style lang="css">
/* footer section styling */
footer {
    background: #111;
    padding: 15px 23px;
    color: #fff;
    text-align: center;
    font-family: "Ubuntu", sans-serif;
}

footer span a {
    color: crimson;
    text-decoration: none;
}

footer span a:hover {
    text-decoration: underline;
}
</style>