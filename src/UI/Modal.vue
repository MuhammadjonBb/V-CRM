<template>
  <v-dialog v-model="store.modal" activator="parent" width="450">
    <v-btn variant="text" @click="store.modal = false" class="close-btn" color="grey"><v-icon
        size="30px">mdi-close</v-icon></v-btn>
    <slot />
  </v-dialog>
</template>

<script setup lang="ts">
import { useModalStore } from "@/store/modal";

const store = useModalStore();
</script>

<style>
.close-btn {
  z-index: 1;
  position: absolute;
  top: 13px;
  right: 5px;
}
</style>
