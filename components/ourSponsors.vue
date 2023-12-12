<template>
        <sponsors class=" m-5 ">
      <div class="text-center">
        <p class="text-white">
          Our sponsors
        </p>
      </div>
      <div class="m-5">
        <div class="flex  sm:flex-col xs:flex-col xs:gap-12 sm:gap-12 w-full">
          <div v-for="imgData in sheetData" :key="imgData" class=" grid h-20 flex-grow card rounded-box place-items-center gap-2"><img :src="imgData.imgLink"
              class="bg-white shadow-[8px_8px_0_0_rgb(29,33,41)]  hover:shadow-none ease-in-out transition-all hover:translate-x-2 p-2 m-1 hover:translate-y-2 max-h-28">
          </div>

        </div>
      </div>
    </sponsors>
</template>
<script>
export default {
    data() {
        return {
            sheetData: {}
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

    const data1 = await this.parseSheet(sheetId, 'sponsors')
    console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
    this.sheetData = data1
   /* const data2 = await this.parseSheet(sheetId, 'Sheet2')
    console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}] */
  },
}
</script>
