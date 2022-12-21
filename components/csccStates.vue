<template>
    <div>
        <state class="">
            <div class="stats  shadow bg-[#2A303C] text-white  sm:stats-vertical xs:stats-vertical ">
                <div v-for="Data in sheetData" :key="Data" class="stat">
                    <div class="stat-figure text-secondary">
                        <div class=" text-2xl">
                            {{Data.emoji}}
                        </div>
                    </div>
                    <div class="stat-title leading-normal">{{Data.title}}</div>
                    <div class="stat-value leading-normal">{{Data.contx}}</div>
                    <div class="stat-desc leading-normal">{{Data.subTitle}}</div>
                </div>
            </div>
        </state>
    </div>


</template>
<script>
export default {
    data() {
        return {
            sheetData :{}
        }
    },
    methods: {
        parseSheet(sheetId, sheetName = null) {
            return this.$gsparser.parse(sheetId, sheetName)
        }
    },
    async mounted() {
        // see: https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps
        const sheetId = '16GAMSG0dP2jxUD88JF2NgTqijixl_shnI30P_6KpJnM'

        const data1 = await this.parseSheet(sheetId, 'stats')
        console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
        this.sheetData = data1
        /* const data2 = await this.parseSheet(sheetId, 'Sheet2')
         console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}] */
    },
}
</script>