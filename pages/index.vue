<template >
  <div data-theme="cyberpunk" class="bg-[#2A303C] font-rgame tracking-wide ">
    <div class="bg-[#2A303C] ">
      <navbar-menu class="bg-[#2A303C] text-white"></navbar-menu>
      <div class="flex bg-[#2A303C] items-center justify-center">
        <herosection></herosection>
      </div>
    </div>
    <sponsors class=" m-5">
      <div class="text-center">
        <p class="text-white">
          Our sponsors
        </p>
      </div>
      <div class="m-5">
        <div class="flex sm:flex-col xs:flex-col xs:gap-3 sm:gap-3 w-full">
          <div class="grid h-20 flex-grow card rounded-box place-items-center"><img src="../assets/support/blidacom.png"
              class="bg-white shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ease-in-out transition-all hover:translate-x-2 hover:translate-y-2  max-h-20">
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-20 flex-grow card rounded-box place-items-center"><img src="../assets/support/gamers.png"
              class="bg-white shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ease-in-out transition-all hover:translate-x-2 hover:translate-y-2  max-h-20">
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-20 flex-grow card  rounded-box place-items-center"><img
              src="../assets/support/hostarts.png"
              class="bg-white shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ease-in-out transition-all hover:translate-x-2 hover:translate-y-2  max-h-20">
          </div>
          <div class="divider divider-horizontal"></div>
          <div class="grid h-20 flex-grow card rounded-box place-items-center"><img
              src="../assets/support/microsoft.png"
              class="bg-white shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none ease-in-out transition-all hover:translate-x-2 hover:translate-y-2  max-h-20">
          </div>
        </div>
      </div>
    </sponsors>
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
export default {
  name: 'IndexPage'
}
</script>

