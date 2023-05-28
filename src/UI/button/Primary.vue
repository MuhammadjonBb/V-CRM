<template>
  <v-btn flat rounded="0" color="primary" class="text-capitalize">{{ label }}</v-btn>
</template>

<script setup lang="ts">
defineProps({
  label: String
})
</script>
