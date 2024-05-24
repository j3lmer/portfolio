<template>
    <div>
        <div className="flex h-screen justify-center items-center intro-gradient-bg text-primary select-none">
            <div
                class="max-w-m p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col">
                <h1
                    className="hover:scale-150 transition-all duration-500 text-[5rem] mobile:text-[3rem] intro-text leading-snug">
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