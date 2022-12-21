<template >
  <div data-theme="cyberpunk" class="bg-[#2A303C] font-rgame tracking-wide ">
    <div class="bg-[#2A303C] ">
      <navbar-menu class="bg-[#2A303C] text-white"></navbar-menu>
      <div class="flex bg-[#2A303C] items-center justify-center">
        <herosection></herosection>
      </div>
    </div>
    <our-sponsors></our-sponsors>
    <projects></projects>


    <div class="divider divide-white before:bg-white after:bg-white bg-[#2A303C] text-white">Hope you like it 💕</div>
    <footer-section></footer-section>
  </div>

</template>

<script>
import Herosection from '../components/herosection.vue'
import NavbarMenu from '../components/navbarMenu.vue'
import OurSponsors from '../components/ourSponsors.vue'
import projects from '../components/projects.vue'
export default {
  components: { projects },
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

