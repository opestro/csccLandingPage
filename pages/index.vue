<template >
  <div data-theme="cyberpunk" class="bg-[#2A303C] font-rgame tracking-wide ">
    <div class="bg-[#2A303C] ">
      <navbar-menu class="bg-[#2A303C] text-white"></navbar-menu>
      <div class="flex bg-[#2A303C] items-center justify-center">
        <herosection></herosection>
      </div>
    </div>
    <our-sponsors></our-sponsors>
    <cards class="m-5 flex items-center justify-center flex-col">
      <div class="text-center ">
        <p class="text-white">
          Some of our projects
        </p>
      </div>
      <div class="flex justify-center sm:flex-col xs:flex-col gap-5 m-10 text-white">
      
      <div class="card w-72 ">
        <figure><img src="../assets/cards/1.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="font-ntbrick card-title tracking-widest  text-[#fe0]">
            Jerry School
          </h2>
          <p class="text-sm">click below to read more!</p>
          <div class="card-actions justify-end">
            <button class="btn bg-[#1c4f82] tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none mr-3 hover:translate-x-2 hover:translate-y-2   hover:text-[#1c2682] hover:bg-[#fe0]">Ream more</button>
          </div>
        </div>
      </div>
      <div class="card w-72  ">
        <figure><img src="../assets/cards/2.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class=" font-ntbrick card-title tracking-widest  text-[#fe0] ">
            Smart Door
          </h2>
          <p class="text-sm">click below to read more!</p>
          <div class="card-actions justify-end">
            <button class="btn bg-[#1c4f82] tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none mr-3 hover:translate-x-2 hover:translate-y-2   hover:text-[#1c2682] hover:bg-[#fe0]">Ream more</button>
          </div>
        </div>
      </div>
      <div class="card w-72  ">
        <figure><img src="../assets/cards/3.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="font-ntbrick card-title tracking-widest  text-[#fe0]">
            USDB Ecopies
          </h2>
          <p class="text-sm">click below to read more!</p>
          <div class="card-actions justify-end">
            <button class="btn bg-[#1c4f82] tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none mr-3 hover:translate-x-2 hover:translate-y-2   hover:text-[#1c2682] hover:bg-[#fe0]">Read more</button>
          </div>
        </div>
      </div>
    </div>
    </cards>


    <div class="divider divide-white before:bg-white after:bg-white bg-[#2A303C] text-white">Hope you like it 💕</div>
    <footer-section></footer-section>
  </div>

</template>

<script>
import Herosection from '../components/herosection.vue'
import NavbarMenu from '../components/navbarMenu.vue'
import OurSponsors from '../components/ourSponsors.vue'
export default {
  name: 'IndexPage',
  data() {
 
       return {
      
    }
  },
  methods: {
    parseSheet (sheetId, sheetName = null) {
      return this.$gsparser.parse(sheetId, sheetName)
    }
  },
  async mounted () {
    // see: https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps
    const sheetId = '16GAMSG0dP2jxUD88JF2NgTqijixl_shnI30P_6KpJnM'

    const data1 = await this.parseSheet(sheetId, 'Sheet1')
    console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]

   /* const data2 = await this.parseSheet(sheetId, 'Sheet2')
    console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}] */
  },
}
</script>

