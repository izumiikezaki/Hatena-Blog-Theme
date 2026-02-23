<script setup lang="ts">
defineProps<{
  side: "left" | "right";
}>();

const classMap = {
  left: "right-[calc(50%+320px)] left-0",
  right: "right-0 left-[calc(50%+320px)]",
};
</script>

<template>
  <div
    class="fixed top-0 bottom-0 hidden items-center justify-center lg:flex"
    :class="classMap[side]"
  >
    <slot />
  </div>
</template>

<style scoped></style>
