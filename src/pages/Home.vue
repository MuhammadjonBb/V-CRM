<template>
  <AppHeader></AppHeader>
  <v-main>
    <v-container fill-height class="pt-16">
      <h1 class="mb-6">Clients</h1>
      <AppTable />
      <BtnSecondary label="Add Client" icon="mdi-account-multiple-plus" class="mx-auto d-flex mt-15">
        <Modal>
          <ModalContent :clientData="[]" mode="create" title="Add client" />
        </Modal>
      </BtnSecondary>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import AppHeader from "@/modules/Header/AppHeader.vue";
import AppTable from "@/modules/AppTable/AppTable.vue";
import BtnSecondary from "@/UI/button/Secondary.vue";
import ModalContent from "@/modules/ModalContent/ModalContent.vue";
import Modal from "@/UI/Modal.vue";
</script>

<style>
* {
  border-radius: 0 !important;
}
</style>
