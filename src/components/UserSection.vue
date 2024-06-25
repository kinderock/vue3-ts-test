<template>
  <section class="user">
    <TheHeader type="user" />

    <section class="content">
      <ThrowResult v-if="hasResults" type="user" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { inject, Ref } from "vue";

import TheHeader from "./blocks/TheHeader.vue";
import ThrowResult from "./blocks/ThrowResult.vue";

const hasResults = inject<Ref<string>>("hasResults");
</script>
