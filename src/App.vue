<template>
  <div class="intro-gradient-bg">
    <Header/>
    <Intro/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  data() {
    return {
      isDarkModeActive: false,
    };
  },
  components: {
    Header,
    Intro
  },
};
</script>