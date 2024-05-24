<template>
    <div>
        <div className="flex justify-center items-center h-screen text-primary select-none intro-gradient-bg">
            <div
                class="flex flex-col items-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 border rounded-lg max-w-m intro-card">
                <h1
                    className="hover:scale-110 text-[5rem] mobile:text-[3rem] leading-snug transition-all duration-500 intro-text">
                    Sample Text
                </h1>

                <h1 id="subtext" className="text-[3rem] mobile:text-[2rem] intro-text">
                    sample text maar dan langer
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

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


            typeWriter.typeString('subtext')
                .pauseFor(2500)
                .deleteAll()
                .typeString('bing chilling thuis')
                .pauseFor(2500)
                .deleteChars(5)
                .typeString('chillt')
                .deleteAll()
                .typeString('nogmeer subtext')
                .pauseFor(2500)
                .start();
        }
    },

    mounted() {
        this.setupTypeWriter();
    },


};
</script>