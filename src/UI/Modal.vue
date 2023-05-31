<template>
  <v-dialog v-model="dialog" activator="parent" width="450">
    <v-btn variant="text" @click="dialog = false" class="close-btn" color="grey"><v-icon
        size="30px">mdi-close</v-icon></v-btn>
    <slot />
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref(false)
</script>

<style>
.close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
