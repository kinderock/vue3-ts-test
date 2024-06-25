<template>
  <figure :class="type">
    <span v-html="throwResultContent.icon" />
    <figcaption>{{ throwResultContent.name }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { gameResultStore } from "@/stores/gameResultStore";
import { computed } from 'vue';

interface Props {
  type: string;
}

interface ResultItem {
  name: string;
  icon: string;
}

const gameStore = gameResultStore();
const props = defineProps<Props>();

const roundResult = computed(() => gameStore.roundResult);
const resultValue = computed<string>(() => roundResult.value[props.type]);
const throwResultItem = computed<{ [key: string]: ResultItem }>(() => ({
  rock: {
    name: "Rock",
    icon: "&#128074;",
  },
  paper: {
    name: "Paper",
    icon: "&#9995;",
  },
  scissors: {
    name: "Scissors",
    icon: "&#9996;",
  },
}));
const throwResultContent = computed(() => throwResultItem.value[resultValue.value]);
</script>