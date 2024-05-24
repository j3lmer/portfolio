<template>
  <div class="intro-gradient-bg">
    <Header />
    <Intro />
  </div>
  <Info />
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",
  data() {
  },
  components: {
    Header,
    Intro,
    Info
  },
};
</script>