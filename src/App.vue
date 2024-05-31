<template>
  <Header />
  <div class="total-wrapper">
    <Intro />
    <Info />
    <Experience />
  </div>
</template>

<script>
import Header from "./components/subcomponents/Header.vue";
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";
import Experience from "./components/Experience.vue";
import { followingDotCursor } from "cursor-effects";

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    Header,
    Intro,
    Info,
    Experience
  },

  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  },

  mounted() {
    if (!this.isMobile()) {
      new followingDotCursor({ color: '#d5f1ef' });
    } 
  }
};
</script>