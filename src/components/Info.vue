<template>
    <div>
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
        <div class="flex md:flex-row flex-col items-center h-screen">
            <div class="basis-1/4"></div>
            <div class="p-4 w-full md:w-auto basis-1/4">
                <FancyCard :mainText="'Hourly'" :subtext="'Eerste volledig op-aanvraag uitgevoerde project'"
					url="'https://github.com/j3lmer/URL-shortener'"
					:iconStr="'clock'" data-aos="fade-up-right" />
            </div>
            <div class="p-4 w-full md:w-auto basis-1/4">
                <FancyCard :mainText="'URL Shortener'"
                    :subtext="'URL-shortener gemaakt binnen 4 dagen'"
					url="https://github.com/j3lmer/hourly"
                    :iconStr="'heart'" data-aos="fade-down-left"
				/>
			 </div>
            <div class="basis-1/4"></div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import FancyCard from './subcomponents/FancyCard.vue';


export default {
    name: "Info",
    data() {
        return {
        };
    },

    methods: {

    },

    components: {
        FancyCard
    },


    mounted() {
        AOS.init();
    }
};
</script>
