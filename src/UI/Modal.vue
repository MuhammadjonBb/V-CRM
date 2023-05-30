<template>
  <v-dialog v-model="dialog" activator="parent" width="450">
    <slot />
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false)
</script>
