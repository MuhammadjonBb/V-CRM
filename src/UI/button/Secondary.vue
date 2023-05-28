<template>
  <v-btn variant="outlined" :prepend-icon="icon" size="large" rounded="0" color="primary" class="px-10 text-capitalize">{{
    label
  }}</v-btn>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  icon: String
})
</script>
