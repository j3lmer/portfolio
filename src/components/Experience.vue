<template>
   <div class="bg-primary h-screen">
    <div class="flex justify-center items-center min-h-screen text-secondary">
        <div class="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-white shadow-md p-6 rounded-lg">
                <h2 class="mb-2 font-bold text-xl">Card 1</h2>
                <p class="text-gray-700">This is the first card.</p>
            </div>
            <div class="bg-white shadow-md p-6 rounded-lg">
                <h2 class="mb-2 font-bold text-xl">Card 2</h2>
                <p class="text-gray-700">This is the second card.</p>
            </div>
            <div class="bg-white shadow-md p-6 rounded-lg">
                <img :src="bouw7"/>
                <h2 class="mb-2 font-bold text-xl">Card 3</h2>
                <p class="text-gray-700">This is the third card.</p>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// import bouw7 from '../assets/images/bouw7.png';
// import mobilox from '../assets/images/mobilox.png';
// import allprint from '../assets/images/allprint.svg';



export default {
    name: "Experience",
    data() {
        return {
            // bouw7,
            // mobilox,
            // allprint,
        };
    },

    methods: {

    },

    components: {
    },


    mounted() {
        AOS.init();
    }
};
</script>
