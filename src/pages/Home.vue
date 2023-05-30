<template>
  <AppHeader></AppHeader>
  <v-main>
    <v-container fill-height class="pt-16">
      <h1 class="mb-6">Clients</h1>
      <AppTable />
      <BtnSecondary label="Add Client" icon="mdi-account-multiple-plus" class="mx-auto d-flex mt-15" />
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import AppHeader from "@/modules/Header/AppHeader.vue";
import AppTable from "@/modules/AppTable/AppTable.vue";
import BtnSecondary from "@/UI/button/Secondary.vue";
</script>

<style>
* {
  border-radius: 0 !important;
}
</style>
