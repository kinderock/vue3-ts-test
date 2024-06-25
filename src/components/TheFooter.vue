<template>
  <footer class="footer">
    <ThrowsCounter />
    <button class="throw" @click="throwIt">Throw it</button>
  </footer>
</template>

<script setup lang="ts">
import ThrowsCounter from "./blocks/ThrowsCounter.vue";

interface Props {
  resultShown: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{(e: "throw-it"): void;}>();
const throwIt = () => {
  if (props.resultShown) return false;
  emit("throw-it");
};
</script>