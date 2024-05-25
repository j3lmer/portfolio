<template>

  <Header />
  <Intro />

  <Info />
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";
import { followingDotCursor } from "cursor-effects";

export default {
  name: "App",
  data() {
  },
  components: {
    Header,
    Intro,
    Info
  },

  mounted() {
    new followingDotCursor({ color: '#d5f1ef' });
  }
};
</script>