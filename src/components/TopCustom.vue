<script setup lang="ts">
import SidePcArea from "./SidePcArea.vue";

const menuItems = [
  { name: "3DCG", link: "/archive/category/3DCG" },
  { name: "プログラミング", link: "/archive/category/プログラミング" },
  { name: "デザイン", link: "/archive/category/デザイン" },
  { name: "日記", link: "/archive/category/日記" },
];
</script>

<template>
  <nav>
    <ul class="flex justify-around bg-white font-sans font-bold">
      <li v-for="item in menuItems" class="block w-full">
        <a
          :href="item.link"
          class="hover:bg-primary-ll/80 block py-1 text-center"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </nav>
  <SidePcArea side="left"> </SidePcArea>
  <SidePcArea side="right">
    <nav class="font-sans">
      <ul class="hidden origin-center rotate-90 gap-12 max-lg:flex">
        <li v-for="item in menuItems">
          <a
            :href="item.link"
            class="hover:text-accent-pale block p-2 text-center text-nowrap"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <ul class="hidden flex-col gap-12 xl:flex">
        <li v-for="item in menuItems" class="block w-full">
          <a
            :href="item.link"
            class="hover:bg-primary-ll block border bg-gray-100 px-4 py-2 text-center font-bold"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </nav>
  </SidePcArea>
</template>

<style scoped></style>
