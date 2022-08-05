<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderNav from './components/App/Navigation.vue'
import Footer from './components/App/Footer.vue'


import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    HeaderNav,
    Footer,
  }
})
</script>


<template>
  <!-- Header -->
  <HeaderNav />

  <!-- main -->
  <main>
    <RouterView />
  </main>

  <!-- Footer -->
  <Footer />
</template>










