<template>
  <header class="top-0 sticky flex justify-between items-center shadow-md -mt-40 py-2 header header-intro">
    <!-- logo -->
    <h1 class="w-3/12 md:filter-none py-4 pl-8">
      <a href="">
        <font-awesome-icon :icon="['fas', 'home']" size="lg"
          class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 active ease-in-out hover:scale-11" />
      </a>
    </h1>

    <!-- navigation -->
    <nav class="max-sm:hidden font-semibold text-lg nav">
      <ul class="flex items-center">
        <li
          class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 active ease-in-out hover:scale-110">
          <a href="" class="main-text">item 1</a>
        </li>
        <li class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 ease-in-out hover:scale-110">
          <a href="" class="main-text">item 2</a>
        </li>
        <li class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 ease-in-out hover:scale-110">
          <a href="" class="main-text">item 3</a>
        </li>
        <li class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 ease-in-out hover:scale-110">
          <a href="" class="main-text">item 4</a>
        </li>
      </ul>
    </nav>

    <!-- buttons --->
    <div class="flex justify-end py-4 pr-8 w-3/12">
      <a href=""
        class="p-4 text-center transition hover:-translate-y-1 duration-300 delay-150 active ease-in-out hover:scale-110 main-text">
        Over mij
      </a>
    </div>
  </header>
</template>

<script>
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "Header",
  props: {},

  data() {
    return {
      scrollPostition: null,
      primaryColor: '#8ec3fa',
      secondaryColor: '#350a16',
      tertiaryColor: '#d5f1ef'
    }
  },

  beforeCreate() {
    library.add(
      faHome,
    );
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    updateColor(color) {
      [...document.querySelectorAll('.header-intro')].forEach(element => {
        element.style.color = color;
      });
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (this.isMobile()) {
        if (scrollPosition >= 772) {
          this.updateColor(this.primaryColor);
        } 
        if (scrollPosition <= 772) {
          this.updateColor(this.tertiaryColor);
        }

        if (scrollPosition >= 1884) {
          this.updateColor(this.secondaryColor);
        }
        return;
      } 

        if (scrollPosition >= 1040) {
          this.updateColor(this.primaryColor);
        }
        
        if (scrollPosition <= 1040) {
          this.updateColor(this.tertiaryColor);
        }

        if (scrollPosition >= 2080) {
          this.updateColor(this.secondaryColor);
        }
    },

    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  }
};
</script>