<template>
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
    <div class="flex items-center h-screen">

            <div class="flex-1 w-32"></div>
            <div class="flex-1 items-center p-4 w-32">
                <div
                    class="block border-gray-200 bg-white hover:bg-gray-100 shadow p-6 border rounded-lg max-w-sm" 
                    data-aos="fade-up-right">

                    <h5 class="mb-2 font-bold text-2xl text-gray-900 dark:text-white tracking-tight">Noteworthy
                        technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                        acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
            <div class="flex-1 items-center p-4 w-32">
                <div
                    class="block border-gray-200 bg-white hover:bg-gray-100 shadow p-6 border rounded-lg max-w-sm" 
                    data-aos="fade-down-left">

                    <h5 class="mb-2 font-bold text-2xl text-gray-900 dark:text-white tracking-tight">Noteworthy
                        technology acquisitions 2021</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                        acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
            <div class="flex-1 w-32"></div>

    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: "Info",
    data() {
        return {
        };
    },

    methods: {

    },

    mounted() {
        AOS.init();
    }
};
</script>