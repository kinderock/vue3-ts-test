<template>
  <section class="computer">
    <TheHeader type="computer" />

    <section class="content">
      <ThrowResult v-if="hasResults" type="computer" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";

import TheHeader from "./blocks/TheHeader.vue";
import ThrowResult from "./blocks/ThrowResult.vue";

const hasResults = inject<Ref<string>>("hasResults");
</script>
