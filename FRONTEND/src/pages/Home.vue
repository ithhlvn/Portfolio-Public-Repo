<script lang="ts">
import FirstPage from '../components/Home/1_Page.vue'
import SecondPage from '../components/Home/2_Page.vue'
import ThirdPage from '../components/Home/3_Page.vue'
import FourthPage from '../components/Home/4_Page.vue'
import FifthPage from '../components/Home/5_Page.vue'

import { defineComponent } from 'vue'

export default defineComponent({
    name: "Home",
    components: {
        FirstPage,
        SecondPage,
        ThirdPage,
        FourthPage,
        FifthPage,

    }
})
</script>

<!-- HomePage -->
<template>
    <!-- Pages -->
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
</template>




