<template>
  <v-app-bar app color="white" height="90" class="px-5">
    <v-icon size="50" color="primary">mdi-vuetify</v-icon>
    <v-text-field class="ml-16 header-search" v-model="search" variant="outlined" color="primary" placeholder="Search"
      prepend-inner-icon="mdi-magnify" hide-details flat></v-text-field>
    <h1 class="ml-auto">The Clients <span class="text-primary">CRM</span> </h1>
  </v-app-bar>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const search: Ref<string> = ref('');
</script>

<style scoped>
.v-text-field.header-search {
  width: 25%;
  flex: 0 0 auto;
}
</style>
