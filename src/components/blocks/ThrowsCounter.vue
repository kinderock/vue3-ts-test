<template>
  <p class="throw-count">{{ throwsCount }} throws</p>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'

const throwsCount = inject<Ref<string>>("throwsCount");
</script>