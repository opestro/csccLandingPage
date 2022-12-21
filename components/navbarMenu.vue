<template>
  <div class="navbar ">
    <div class="navbar-start ">
      <div class="dropdown  md:hidden lg:hidden xl:hidden 2xl:hidden ">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#1c4f82] rounded-box w-52">
          <li class="hover:bg-[#1c4f82] hover:text-[#fe0]"><a>Item 1</a></li>
          <li class="hover:bg-[#1c4f82] hover:text-[#fe0]"><a>Item 3</a></li>
        </ul>
      </div>
      <a
        class="btn btn-ghost normal-case text-xl  font-ntbrick hover:bg-[#1c4f82] tracking-widest  hover:text-[#fe0] my-2">CSCClub</a>
    </div>
    <div class="navbar-center xs:hidden sm:hidden  lg:flex">
      <ul class="menu menu-horizontal   px-1">
        <li class="hover:bg-[#1c4f82] hover:text-[#fe0] active:bg-[#1c4f82] focus:bg-[#1c4f82]"><a>Hero</a></li>
        <li class="hover:bg-[#1c4f82] hover:text-[#fe0] focus:bg-[#1c4f82]"><a>Our projects</a></li>
        <li class="hover:bg-[#1c4f82] hover:text-[#fe0] focus:bg-[#1c4f82]"><a>Members</a></li>
        <li class="hover:bg-[#1c4f82] hover:text-[#fe0] focus:bg-[#1c4f82]"><a>Contact Us</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a
        class="btn bg-[#1c4f82] tracking-widest shadow-[8px_8px_0_0_rgb(29,33,41)] hover:shadow-none mr-3 hover:translate-x-2 hover:translate-y-2   hover:text-[#1c2682] hover:bg-[#fe0]">Get
        started</a>
    </div>
  </div>
</template>
<script>
import logoImage from "../assets/ffgr.png"
export default {
  data() {
    return {
      logo: logoImage,
    }
  },
}
</script>