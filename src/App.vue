<template>
  <Header />
  <div class="total-wrapper">
    <Intro />
    <Info />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Info from "./components/Info.vue";
import { followingDotCursor } from "cursor-effects";

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    Header,
    Intro,
    Info
  },

  methods: {
  },

  mounted() {
    new followingDotCursor({ color: '#d5f1ef' });
  }
};
</script>