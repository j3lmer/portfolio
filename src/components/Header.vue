<template>
  <header class="top-0 sticky flex justify-between items-center bg-white shadow-md px-8 py-02 header header-text">
    <!-- logo -->
    <h1 class="w-3/12">
      <a href="">
        <font-awesome-icon :icon="['fas', 'home']" size="lg" />
      </a>
    </h1>

    <!-- navigation -->
    <nav class="font-semibold text-lg nav">
      <ul class="flex items-center">
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
          <a href="">item-1</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="">item-2</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="">item-3</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
          <a href="">item-4</a>
        </li>
      </ul>
    </nav>

    <!-- buttons --->
    <div class="flex justify-end w-3/12">
      <a href="">
        Over mij
      </a>
    </div>
  </header>
</template>

<script>
import {
  faHome,
  faCalendarMinus,
  faCog,
  faCommentDots,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faComments, faMoon } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
export default {
  name: "Header",
  props: {},

  data() {
    return {};
  },

  methods: {},


  beforeCreate() {
    library.add(
      faComments,
      faHome,
      faCommentDots,
      faCalendarMinus,
      faCog,
      faMoon,
      faSearch
    );
  },

};
</script>