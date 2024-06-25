<template>
  <UserSection />
  <ComputerSection />
  <Dialog v-if="showDialog" />
  <TheFooter @throw-it="generateVariations" :result-shown="showDialog" />
</template>

<script setup lang="ts">
import { provide, computed } from 'vue';
import { gameResultStore } from "@/stores/gameResultStore";
import { ThrowResultValue } from "@/types/GameTypes";

import UserSection from './UserSection.vue';
import ComputerSection from './ComputerSection.vue';
import Dialog from './Dialog.vue';
import TheFooter from "./TheFooter.vue";

const gameStore = gameResultStore();
const { setRoundResult, calculateScore, changeDialogStatus, incrementThrowsCounter } = gameStore;
const showDialog = computed(() => gameStore.showDialog);
const throwsCount = computed(() => gameStore.throwsCount);
const hasResults = computed(() => gameStore.hasResults);

provide("throwsCount", throwsCount);
provide("hasResults", hasResults);

const generateVariations = () => {
  const variants: string[] = ["rock", "paper", "scissors"];
  const randomValue: number = () => Math.floor(Math.random() * variants.length);
  const throwResult: ThrowResultValue = {
    user: variants[randomValue()],
    computer: variants[randomValue()]
  }
  setRoundResult(throwResult);
  calculateScore();
  changeDialogStatus(true);
  incrementThrowsCounter();
}
</script>
