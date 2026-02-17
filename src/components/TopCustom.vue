<script setup lang="ts">
const menuItems = [
  { name: "3DCG", link: "/archive/category/3DCG" },
  { name: "プログラミング", link: "/archive/category/プログラミング" },
  { name: "デザイン", link: "/archive/category/デザイン" },
  { name: "日記", link: "/archive/category/日記" },
];
</script>

<template>
  <div class="font-sans font-bold">
    <nav>
      <ul class="flex justify-around bg-gray-100">
        <li v-for="item in menuItems">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
