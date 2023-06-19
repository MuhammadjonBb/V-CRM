<template>
  <AppHeader />
  <v-main>
    <v-container fill-height class="pt-16">
      <AppTable />
      <BtnSecondary label="Add Client" icon="mdi-account-multiple-plus" class="mx-auto d-flex mt-15">

        <v-dialog v-model="modal" activator="parent" width="450">
          <v-btn variant="text" @click="modal = false" class="close-btn" color="grey"><v-icon
              size="30px">mdi-close</v-icon></v-btn>
          <ModalContent :modal="modal" @update:modal="modal = $event" :clientData="[]" mode="create" title="Add client" />
        </v-dialog>

      </BtnSecondary>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import AppHeader from "@/modules/Header/AppHeader.vue";
import AppTable from "@/modules/AppTable/AppTable.vue";
import BtnSecondary from "@/UI/button/Secondary.vue";
import ModalContent from "@/modules/ModalContent/ModalContent.vue";
import { ref } from 'vue'

const modal = ref(false)
</script>

<style>
* {
  border-radius: 0 !important;
}

.close-btn {
  z-index: 1;
  position: absolute;
  top: 13px;
  right: 5px;
}
</style>
