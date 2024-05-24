<template>
  <header class="top-0 sticky flex justify-between items-center shadow-md py-2 header header-intro">
    <!-- logo -->
    <h1 class="w-3/12 md:filter-none py-4 pl-8">
      <a href="">
        <font-awesome-icon :icon="['fas', 'home']" size="lg" />
      </a>
    </h1>

    <!-- navigation -->
    <nav class="max-sm:hidden font-semibold text-lg nav">
      <ul class="flex items-center">
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 text-center hover:text-green-500 duration-200 cursor-pointer active">
          <a href="" class="md:filter-none">item 1</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 text-center hover:text-green-500 duration-200 cursor-pointer">
          <a href="" class="">item 2</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 text-center hover:text-green-500 duration-200 cursor-pointer">
          <a href="" class="md:filter-none">item 3</a>
        </li>
        <li
          class="border-green-500 p-4 border-b-2 border-opacity-0 hover:border-opacity-100 text-center hover:text-green-500 duration-200 cursor-pointer">
          <a href="" class="md:filter-none">item 4</a>
        </li>
      </ul>
    </nav>

    <!-- buttons --->
    <div class="flex justify-end py-4 pr-8 w-3/12">
      <a href="">
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
    return {};
  },

  beforeCreate() {
    library.add(
      faHome,
    );
  },
  methods: {},
};
</script>