<template>
    <a href="#" class="block relative h-64 sm:h-80 lg:h-96 group" >
        <span class="absolute inset-0 border-2 border-black border-dashed"></span>

        <div
            class="relative flex items-end border-2 bg-white border-black h-full transform transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div class="group-hover:absolute group-hover:opacity-0 p-4 sm:p-6 lg:p-8 !pt-0 transition-opacity">
                <font-awesome-icon :icon="['far', iconStr]" size="xl" />

                <h2 class="mt-4 font-medium text-xl sm:text-2xl main-text">{{ mainText }}</h2>
            </div>

            <div
                class="group-hover:relative absolute opacity-0 group-hover:opacity-100 p-4 sm:p-6 lg:p-8 transition-opacity">
                <h3 class="mt-4 font-medium text-xl sm:text-2xl main-text">{{ mainText }}</h3>

                <p class="mt-4 text-sm sm:text-base main-text">
                    {{ subtext }}
                </p>

                <p class="mt-8 font-bold main-text">Lees meer</p>
            </div>
        </div>
    </a>
</template>

<script>
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default {
    name: "FancyCard",
    props: {
        mainText: String,
        subtext: String,
        iconStr: String,
    },

    data() {
        return {};
    },

    beforeCreate() {

    },
    methods: {},
    
    beforeCreate() {
        library.add(faClock, faHeart);
    },
};
</script>
