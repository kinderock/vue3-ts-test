<template>
  <dialog class="game-over hide" open>
    <h2>Game over</h2>
<!--    <p class="message"> You won!! </p>-->
    <button class="start-over" @click="hidePopup"> Start over </button>
  </dialog>
</template>

<script setup lang="ts">
import { gameResultStore } from "@/stores/gameResultStore";

const gameStore = gameResultStore();
const { changeDialogStatus, setRoundResult } = gameStore;
const hidePopup = () => {
  changeDialogStatus(false);
  setRoundResult({
    user: null,
    computer: null,
  });
}
</script>
