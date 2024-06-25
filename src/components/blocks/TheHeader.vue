<template>
  <header>
    <p class="actor">{{ headerData[type].title }}</p>
    <p :class="headerData[type].class">{{ gameStore.gameScore[type] }} points</p>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { HeaderData } from "@/types/HeaderTypes";
import { gameResultStore } from "@/stores/gameResultStore";

interface Props {
  type: string
}

const gameStore = gameResultStore();

const props = defineProps<Props>();
const headerData = computed<HeaderData>(() => ({
  user: {
    title: "You",
    class: "user-score",
  },
  computer: {
    title: "Computer",
    class: "computer-score",
  }
}));
</script>
