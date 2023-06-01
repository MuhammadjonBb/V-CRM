<template>
  <div class="table-wrapper">
    <v-data-table style="font-size: 14px;" sort-asc-icon="mdi-arrow-up" color="success" sort-desc-icon="mdi-arrow-down"
      flat :items-per-page="10" :loading="!store.clients.length" :headers="headers" :items="store.clients"
      item-value="name" class="elevation-0 ">

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
            <v-dialog v-model="modal[item.columns.id + 'edit']" activator="parent" width="450">

              <ModalContent @update:modal="modal[item.columns.id + 'edit'] = $event" :clientData="item.columns"
                mode="edit" title="Edit client" />
            </v-dialog>
            <template v-slot:prepend>
              <v-icon color="primary" />
            </template>
          </v-btn>

          <v-btn prepend-icon="mdi-delete " class="text-capitalize" style="font-weight: 400;" variant="text">
            Delete

            <v-dialog v-model="modal[item.columns.id + 'del']" activator="parent" width="450">
              <v-card class="py-6 px-9 text-center">
                <v-card-title class="">Delete client</v-card-title>
                <v-card-text class="py-1 mb-3">Are you sure you want to delete this client?</v-card-text>
                <Primary class="d-flex align-self-center px-7 py-5" size="large" label="Delete"
                  @click="deleteClient(item.columns.id)" />
              </v-card>
            </v-dialog>

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
import { ref } from "vue";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { useTableStore } from "@/modules/AppTable/store/table";
import removeCharc from "@/modules/AppTable/helpers/removeCharc"
import ModalContent from "@/modules/ModalContent/ModalContent.vue";
import { onMounted } from "vue";
import Primary from "@/UI/button/Primary.vue";
import deleteClientReq from "@/modules/AppTable/api/deleteClient";


const store = useTableStore()
const modal = ref({
})

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

onMounted(() => {
  store.setClients()
})

function deleteClient(id: string) {
  deleteClientReq(id).then(() => {
    modal.value[id + 'del'] = false
    store.setClients()
  })
}
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
