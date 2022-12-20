<template>
    <div class="bg-[#2A303C] text-white">
        <div class="hero min-h-[100vh]  bg-[#2A303C]">
            <div class="hero-content flex flex-col text-center">
                <div class="max-w-4xl">
                    <h1 class="text-5xl xs:text-4xl font-bold leading-normal text-[#fe0]" style="font-weight: 400">{{ heroTitle }} </h1>
                    <p class="py-6 text-sm xs:text-xs ">The Computer Science Community Club is the first
                        scientific club in University Saad Dahleb of BLIDA since 2012 . CSCC is led by a team of geeks
                        with a track motivation of building a high quality of developers in students community, we
                        invest our time to create projects and ideas that make the university experience unique and
                        beneficial. We’re here because we love what we do. Our passion lies in helping students who are
                        interested in computer science through organizing non-profit activities ( events , trainings ,
                        workshops) , our mission is to usher the next wave of the new digital advanced Algeria .</p>
                    <button @click="write()" v-show="!supportBtn"
                        class="btn bg-[#1c4f82]  hover:bg-[#fe0] tracking-widest  hover:text-[#1c2682]">Wanna support us?</button>
                    <div class="text-white" v-if="supportBtn">
                        <span class="label-text text-white tracking-widest ">Type ✍️ what you like and share it on your story 🤝</span>
                        <div class="flex items-center justify-center">
                            <p>
                                👉
                            </p>
                            <input type="text" placeholder="Type ✍️ what you like and share it on your story 🤝"
                                v-model="heroTitle"
                                class="input m-2 bg-[#2A303C] input-bordered  border-[#fe0] focus:outline-[#fe0] input-primary w-full max-w-xs" />

                        </div>
                    </div>
                </div>
                <CsccStates></CsccStates>
            </div>
        </div>

    </div>
</template>
<script>
import CsccStates from './csccStates.vue'
export default {
    components: { CsccStates },
    data() {
        return {
            heroTitle: 'You can make The Difference 🦾',
            supportBtn: false

        }
    },
    methods: {
        write() {
            this.supportBtn = !this.supportBtn
            this.heroTitle = 'Write something you love'
        },
    },
}
</script>