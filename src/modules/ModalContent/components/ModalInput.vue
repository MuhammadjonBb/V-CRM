<template>
  <v-text-field color="primary" variant="underlined" :label="label" v-model="value"
    @update:model-value="$emit('update:value', value)"></v-text-field>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  label: String
})

const value = ref('')
</script>
