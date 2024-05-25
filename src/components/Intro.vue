<template>
    <div class="intro-gradient-bg">
        <div className="flex justify-center items-center h-screen text-primary select-none intro-gradient-bg"
            data-aos="zoom-in">
            <div
                class="flex flex-col items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 border rounded-lg max-w-m intro-card">
                <h1
                    className="hover:scale-110 text-[5rem] mobile:text-[1rem] leading-snug transition-all duration-500 intro-text">
                    Jelmer
                </h1>

                <h1 id="subtext" className="text-[3rem] intro-text">
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: "Intro",
    data() {
        return {
        };
    },

    methods: {
        setupTypeWriter() {
            const typeWriter = new Typewriter(document.getElementById('subtext'), {
                loop: true
            });


            typeWriter.typeString('van der bij')
                .pauseFor(2500)
                .deleteAll()
                .typeString('software developer')
                .pauseFor(2500)
                .deleteChars(9)
                .typeString('architect')
                .deleteAll()
                .typeString('collega')
                .pauseFor(2500)
                .start();
        }
    },

    mounted() {
        this.setupTypeWriter();
        AOS.init();
    },


};
</script>