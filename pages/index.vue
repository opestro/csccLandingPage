<template >
  <div data-theme="cyberpunk" class="bg-[#2A303C]">
    <div class="bg-[#2A303C] ">
      <navbar-menu class="bg-[#2A303C] text-white"></navbar-menu>
      <div class="flex bg-[#2A303C] items-center justify-center">
        <herosection></herosection>
      </div>
    </div>
    <div class="divider divide-white before:bg-white after:bg-white bg-[#2A303C] text-white">Hope you like it 💕</div>
    <footer-section></footer-section>
  </div>

</template>

<script>
import Herosection from '../components/herosection.vue'
import NavbarMenu from '../components/navbarMenu.vue'
export default {
  name: 'IndexPage'
}
</script>

