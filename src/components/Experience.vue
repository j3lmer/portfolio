<template>
  <div class="text-center mb-8 px-5 h-10">
    <h1 class="text-4xl font-bold text-white main-text experience-text mb-5">Ervaringen</h1>
  </div>
  <div class="bg-primary flex flex-col items-center experience-container">
    <div class="gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-20">
      <div
        class="card bg-allprint experience-allprint shadow-2xl p-6 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">

        <div
          class="card bg-really_white shadow-xl p-6 mb-2 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <div class="card-content">
            <Allprint class="w-full" />
          </div>
        </div>
        <div class="card-content">
          <h2 class="mb-2 font-bold text-xl mt-5">Allprint</h2>
          <span class="text-customwhite">Part-time | Heden</span>
          <p>Specialistische drukkerij.</p>
        </div>
      </div>
      <div
        class="card bg-mobilox experience-mobilox shadow-2xl p-6 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div
          class="card bg-really_white shadow-xl p-6 mb-2 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">

          <div class="card-content">
            <img src="../assets/images/mobilox.png" />
          </div>
        </div>
        <div class="card-content">
          <h2 class="mb-2 font-bold text-xl mt-5">Mobilox</h2>
          <span class="text-customwhite">Part-time | Heden</span>
          <p>Voertuig voorraadbeheer en advertentieplatform.</p>
        </div>
      </div>
      <div
        class="card bg-bouw7 experience-bouw7 shadow-2xl p-6 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div
          class="card bg-really_white shadow-xl p-6 mb-2 rounded-lg w-full max-w-xs mx-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">

          <div class="card-content">
            <img src="../assets/images/bouw7.png" />
          </div>
        </div>
        <div class="card-content">
          <h2 class="mb-2 font-bold text-xl mt-5">Bouw7</h2>
          <span class="text-subtext">Stage | Verleden</span>
          <p>Cloudsoftware, voor de bouw.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Allprint from '../assets/images/allprint.vue';

export default {
  name: "Experience",
  data() {
    return {};
  },
  methods: {},
  components: {
    Allprint
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-content {
  margin-top: auto;
  /* Pushes the content to the bottom */
}

/* Add any custom styles here */
</style>
