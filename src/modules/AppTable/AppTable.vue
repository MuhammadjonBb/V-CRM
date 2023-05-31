<template>
  <div class="table-wrapper">
    <v-data-table style="font-size: 14px;" sort-asc-icon="mdi-arrow-up" color="success" sort-desc-icon="mdi-arrow-down"
      flat v-model:items-per-page="itemsPerPage" :loading="!store.clients.length" :headers="headers"
      :items="store.clients" item-value="name" class="elevation-0 ">

      <!--eslint-disable-next-line vue/valid-v-slot-->
      <template v-slot:item.createdAt="{ item }">
        <td class="d-flex align-center">
          <span class="mr-1">
            {{ item.columns.createdAt[0] }}
          </span>
          <span class="text-grey">
            {{ item.columns.createdAt[1] }}
          </span>
        </td>
      </template>

      <!--eslint-disable-next-line vue/valid-v-slot-->
      <template v-slot:item.contacts="{ item }">
        <td class="d-flex" style="flex-wrap: wrap; gap: 3px;">
          <v-chip v-for="(value, index) in item.columns.contacts" density="compact" color="primary" :key="index" small>
            {{ removeCharc(JSON.stringify(value)) }}
          </v-chip>
        </td>
      </template>

      <!--eslint-disable-next-line vue/valid-v-slot-->
      <template v-slot:item.actions="{ item }">
        <td class="d-flex">
          <v-btn prepend-icon="mdi-pencil " class="text-capitalize" style="font-weight: 400;" variant="text">
            Edit
            <Modal>
              <ModalContent :clientData="item.columns" mode="edit" title="Edit client" />
            </Modal>
            <template v-slot:prepend>
              <v-icon color="primary" />
            </template>
          </v-btn>
          <v-btn prepend-icon="mdi-delete " class="text-capitalize" style="font-weight: 400;" variant="text">
            Delete

            <template v-slot:prepend>
              <v-icon color="red" />
            </template>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>


  <!-- <v-table>
    <thead>
      <tr>
        <th class="text-left text-caption">ID
          <v-icon size="14" color="primary" icon="mdi-arrow-down" />
        </th>
        <th class="text-left text-caption">Full Name <v-icon size="14" color="primary" icon="mdi-arrow-down" /> </th>
        <th class="text-left text-caption">Date and time of creation <v-icon size="14" color="primary"
            icon="mdi-arrow-down" /> </th>
        <th class="text-left text-caption">Last update <v-icon size="14" color="primary" icon="mdi-arrow-down" /> </th>
        <th class="text-left text-caption">Contacts</th>
        <th class="text-left text-caption">Actions</th>
      </tr>
    </thead>
  </v-table> -->
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { useTableStore } from "@/modules/AppTable/store/table";
import removeCharc from "@/modules/AppTable/helpers/removeCharc"
import Modal from "@/UI/Modal.vue"
import ModalContent from "@/modules/ModalContent/ModalContent.vue";

const store = useTableStore()

const itemsPerPage: Ref<number> = ref(5);
const headers = ref([
  {
    title: 'ID',
    align: 'start',
    sortable: false,
    key: 'id',
  },
  {
    title: 'Full Name',
    align: 'start',
    sortable: true,
    key: 'fullname',
  },
  {
    title: 'Created At',
    align: 'start',
    sortable: true,
    key: 'createdAt',
  },
  {
    title: 'Contacts',
    align: 'start',
    sortable: false,
    key: 'contacts',
  },
  {
    title: 'Actions',
    align: 'start',
    sortable: false,
    key: 'actions',
  },

])

</script>

<style>
.v-table>.v-table__wrapper>table>thead>tr>th {
  font-weight: normal;
}

.table-wrapper {
  width: 1200px;
  margin: 0 auto;
}
</style>
