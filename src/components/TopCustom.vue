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
    <ul class="flex justify-around bg-gray-100 font-sans font-bold">
      <li v-for="item in menuItems">
        <a :href="item.link">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
  <SidePcArea side="left"> </SidePcArea>
  <SidePcArea side="right">
    <nav class="flex justify-around bg-gray-100 font-sans font-bold">
      <ul>
        <li v-for="item in menuItems">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </SidePcArea>
</template>

<style scoped></style>
