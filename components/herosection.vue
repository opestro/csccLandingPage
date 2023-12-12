<template>
  <div class="bg-[#2A303C] text-white">
    <div class="hero min-h-[100vh]  bg-[#2A303C]">
      <div class="hero-content flex flex-col text-center">
        <div class="max-w-4xl">
          <h1 class="text-5xl xs:text-4xl font-ntbrick font-bold leading-normal text-[#fe0]" style="font-weight: 400">{{
            heroTitle }} </h1>
          <p class="py-6 text-sm  xs:text-xs ">{{ sheetData.Description }}</p>
          <vd class="flex justify-center ">
            <video width="560" autoplay loop muted v-show="!supportBtn" >
              <source src="../static/vds/Untitled-5.mp4" type="video/mp4">
            </video>
          </vd>

          <button @click="write()" v-show="!supportBtn" class="btn bg-[#1c4f82]  hover:text-[#1c2682] hover:bg-[#fe0]  my-5 hover:translate-x-2 hover:translate-y-2
                        tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ">{{ sheetData.btnPr
                        }}
          </button>
          <button @click="registre()" class="btn bg-[#1c4f82]  hover:text-[#1c2682] hover:bg-[#fe0]  my-5 hover:translate-x-2 hover:translate-y-2
          tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ">Join Us now
</button>
          <div class="text-white" v-if="supportBtn">
            <span class="label-text text-white tracking-widest ">Type ✍️ what you like and share it on your
              story 🤝</span>
            <div class="flex items-center justify-center">
              <p>
                👉
              </p>
              <input type="text" placeholder="Type ✍️ what you like and share it on your story 🤝" v-model="heroTitle"
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
      supportBtn: false,
      sheetData: {},
    }
  },
  methods: {
    write() {
      this.supportBtn = !this.supportBtn
      this.heroTitle = 'Write something About US !'
    },
    parseSheet(sheetId, sheetName = null) {
      return this.$gsparser.parse(sheetId, sheetName)
    }
  },
  async mounted() {
    // see: https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps
    const sheetId = '16GAMSG0dP2jxUD88JF2NgTqijixl_shnI30P_6KpJnM'

    const data1 = await this.parseSheet(sheetId, 'hero')
    console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
    this.sheetData = data1[0]
    /* const data2 = await this.parseSheet(sheetId, 'Sheet2')
     console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}] */
  },
}
</script>
