<script lang="ts">
import { defineComponent } from 'vue'
import FirstPage from '../components/Projects/1_Page.vue'
export default defineComponent({
    name: "Projects",
    components: {
        FirstPage,
    }
})
</script>

<!-- ProjectsPage -->
<template>
    <!-- Pages -->
    <FirstPage />
</template>