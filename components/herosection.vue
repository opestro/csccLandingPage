<template>
    <div class="bg-[#2A303C] text-white">
        <div class="hero min-h-[70vh]  bg-[#2A303C]">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold  text-[#fe0]">{{ heroTitle }} </h1>
                    <p class="py-6 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                     <button @click="write()" v-show="!supportBtn"
                        class="btn bg-[#1c4f82]  hover:bg-[#1c2682] hover:text-[#fe0]">Wanna support us?</button>
                    <div class="text-white" v-if="supportBtn">
                            <span class="label-text text-white">Type ✍️ what you like and share it on your story 🤝</span>
                        <div class="flex items-center justify-center">
                           <p>
                            👉
                           </p> 
                           <input type="text" 
                        placeholder="Type ✍️ what you like and share it on your story 🤝" v-model="heroTitle"
                        class="input m-2 bg-[#2A303C] input-bordered  border-[#fe0] focus:outline-[#fe0] input-primary w-full max-w-xs" />
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <cscc-states></cscc-states>
    </div>
</template>
<script>
import CsccStates from './csccStates.vue'
export default {
    components: { CsccStates },
    data() {
        return {
            heroTitle: 'Mar7ba bik 👋',
            supportBtn: false

        }
    },
    methods: {
        write() {
            this.supportBtn = !this.supportBtn
            this.heroTitle = ''
        },
    },
}
</script>