<template>
    <cards class="m-5 flex items-center justify-center flex-col">
        <div class="text-center ">
            <p class="text-white">
                Some of our projects
            </p>
        </div>

        <div class="flex justify-center sm:flex-col xs:flex-col gap-5 m-10 text-white">
            <div v-for="Prodata in sheetData" :key="Prodata" class="card w-72 ">
                <figure><img :src="Prodata.projectImg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="font-ntbrick card-title tracking-widest  text-[#fe0]">
                        {{ Prodata.projectTitle }}
                    </h2>
                    <p class="text-sm">{{ Prodata.projectSubTitle }}</p>
                    <div class="card-actions justify-end">
                        <button
                            class="btn bg-[#1c4f82] tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)]
                            hover:shadow-none mr-3 hover:translate-x-2 hover:translate-y-2
                            hover:text-[#1c2682] hover:bg-[#fe0]">{{ Prodata.projectBtn }}</button>
                    </div>
                </div>

            </div>
        </div>
    </cards>
</template>
<script>
export default {
    data() {
        return {
            sheetData: {}
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

        const data1 = await this.parseSheet(sheetId, 'projects')
        console.log(data1) // [{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]
        this.sheetData = data1
        /* const data2 = await this.parseSheet(sheetId, 'Sheet2')
         console.log(data2) // [{"a":10,"b":20,"c":30},{"a":40,"b":50,"c":60},{"a":70,"b":80,"c":90}] */
    },

}
</script>