<script setup lang="ts">
import { computed, ref } from "vue";
import CompanyLogo from "./components/CompanyLogo.vue";
import { useMouse, useWindowSize } from "@vueuse/core";

const { x, y } = useMouse();
const { width, height } = useWindowSize();

const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));
const distance = computed(() =>
  Math.sqrt(dx.value * dx.value + dy.value * dy.value)
);

const size = computed(() => Math.max(300 - distance.value / 3, 150));

const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1));

const logo = ref<HTMLElement>();
const text = ref<HTMLElement>();
const logoGradient = computed(() => {
  let rect = logo.value?.getBoundingClientRect();
  const xPos = x.value - (rect?.left ?? 0);
  const yPos = y.value - (rect?.top ?? 0);

  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`;
});
const textGradient = computed(() => {
  let rect = text.value?.getBoundingClientRect();
  const xPos = x.value - (rect?.left ?? 0);
  const yPos = y.value - (rect?.top ?? 0);

  return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`;
});
</script>

<template>
  <div
    class="w-screen h-screen bg-black flex flex-col items-center justify-between relative overflow-hidden"
  >
    <div
      class="absolute bg-white bg-opacity-40 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
    <div class="free-space"></div>
    <a
      ref="logo"
      href="#"
      :style="{
        maskImage: logoGradient,
      }"
    >
      <CompanyLogo />
    </a>
    <p
      ref="text"
      :style="{
        maskImage: textGradient,
      }"
      class="text-white mb-10 text-lg"
    >
      Minimalistic things for minimalistic people.
    </p>
  </div>
</template>

<style scoped></style>
