<template>
  <div>
    <!-- Golvende achtergrond -->
    <div class="info-gradient-bg waveAnimation">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none">
        <path class="w1 waveTop"
          d="M-8.74,71.55 C289.78,255.11 349.60,4.47 505.36,34.05 L500.00,150.00 L0.00,150.00 Z" />
        <path class="w2 waveMiddle"
          d="M-23.42,125.83 C187.63,45.89 299.38,57.73 526.80,123.86 L500.00,150.00 L0.00,150.00 Z" />
        <path class="w3 waveBottom"
          d="M-23.42,125.83 C172.96,-152.44 217.55,183.06 504.22,55.77 L500.00,150.00 L0.00,150.00 Z" />
      </svg>
    </div>

    <!-- Inhoud -->
    <div class="min-h-screen py-16 px-4 max-w-6xl mx-auto text-center space-y-16">

      <!-- Intro -->
      <div class="space-y-4">
        <h1 class="text-4xl font-bold">Dit ben ik!</h1>
        <p class="text-lg text-gray-700">
          Hier vind je een selectie van projecten die ik (bijna allemaal) heb gemaakt tijdens mijn studie.
          Sinds ik fulltime werk bij twee bedrijven, is de tijd beperkt, maar ik vind dit leuke dingen om te laten zien.
        </p>
      </div>

      <!-- Projecten -->
      <div class="grid md:grid-cols-3 gap-6">
        <FancyCard :mainText="'Hourly'"
          :subtext="'Mijn eerste project volledig op aanvraag uitgevoerd: urenregistratie met exportfunctie.'"
          :tags="'Symfony, Bootstrap'" url="https://github.com/j3lmer/hourly" :iconStr="'clock'" :iconStyle="'fas'"
          data-aos="fade-up-right" />
        <FancyCard :mainText="'URL Shortener'"
          :subtext="'Een simpele, werkende linkverkorter gebouwd in slechts 4 dagen.'" :tags="'Meteor, Bootstrap'"
          url="https://github.com/j3lmer/URL-shortener" :iconStr="'tree'" data-aos="fade-down-left" />
        <FancyCard :mainText="'TopdownKiller'" :subtext="'Keuzedeel games Friesland College / Firda.'"
          :tags="'Unity, C#'" url="https://github.com/j3lmer/TopdownKiller" :iconStr="'gamepad'" :iconStyle="'fas'"
          data-aos="fade-up-right" />
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <FancyCard :mainText="'Deze portfolio!'" :subtext="'Deze portfolio, gemaakt met vue en liefde'"
          :tags="'Vue, Tailwind'" url="https://github.com/j3lmer/portfolio" :iconStr="'gamepad'"
          data-aos="fade-down-left" />
        <FancyCard :mainText="'Suus-blog'" :subtext="'[WIP] blog die ik schrijf voor mijn vriendin'"
          :tags="'Symfony, Vue, Typescript'" url="https://github.com/j3lmer/tailwind-blog-suus" :iconStr="'pen-nib'"
          :iconStyle="'fas'" data-aos="fade-up-right" />
        <FancyCard :mainText="'bedb'"
          :subtext="'Game review aggregator, voorbereidende opdracht voor mijn PVB bij Friesland College / Firda'"
          :tags="'Symfony, Vue, Typescript, Docker'" url="https://github.com/j3lmer/bedb" :iconStyle="'fas'"
          :iconStr="'book'" data-aos="fade-down-left" />
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <FancyCard :mainText="'json-editor'" :subtext="'TUI Json editor, niet voor gebruik, maar om te leren'"
          :tags="'Rust, Ratatui, TUI'" url="https://github.com/j3lmer/json-editor" :iconStr="'file'"
          data-aos="fade-up-right" />
        <FancyCard :mainText="'MJBot'"
          :subtext="'[WIP] Een maat en ik bouwen een oplossing voor spotify linkjes in chatapps'"
          :tags="'Symfony, Vue, Docker'" url="https://github.com/j3lmer/mjbot" :iconStr="'cog'"
          data-aos="fade-down-left" />
        <FancyCard :mainText="'Corrado-database revive'"
          :subtext="'[WIP] Hier geen repo link, nieuw leven blazen in een ouder project, samen met mijn broer en beste maat'"
          :tags="'Symfony, Tailwind, Docker'" url="https://corrado-database.nl" :iconStr="'car'"
          data-aos="fade-up-right" />
      </div>
      <div class="grid md:grid-cols-1 gap-6">
        <FancyCard :mainText="'Suus-game-hub'" :subtext="'[WIP] Game hub met verscheidene TUI games voor mijn vriendin'"
          :tags="'Rust, Ratatui, TUI'" url="https://github.com/j3lmer/suus-game-hub" :iconStr="'heart'"
          data-aos="fade-down-left" />
      </div>

      <!-- Persoonlijke noot -->
      <div class="text-gray-600 text-md max-w-xl mx-auto">
        <p>
          Ik begin vaak met veel enthousiasme aan nieuwe projecten — soms raken ze af, soms blijven ze in conceptfase
          hangen.
          Desondanks leer ik van elk project iets nieuws. Buiten mijn werk run ik ook een homeserver
          met Docker-containers omdat ik er plezier uit haal EN het handig vind om zelfvoorzienend te zijn.
        </p>
      </div>

      <!-- Afbeeldingen/carousel -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Projectbeelden & Inspiratie</h2>
        <div class="bg-gray-100 rounded-xl shadow p-6">
          <!-- Placeholder carousel -->
          <p class="text-gray-500 italic">[Hier komt een carousel of lightbox met afbeeldingen van projecten]</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import FancyCard from './subcomponents/FancyCard.vue';

export default {
  name: "Info",
  components: {
    FancyCard,
  },
  data() {
    return {
    }
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style lang="css" scoped></style>
