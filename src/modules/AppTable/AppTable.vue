<template>
  <div class="table-wrapper">
    <v-data-table sort-asc-icon="mdi-arrow-up" color="success" sort-desc-icon="mdi-arrow-down" flat
      v-model:items-per-page="itemsPerPage" :loading="!store.clients.length" :headers="headers" :items="store.clients"
      item-value="name" class="elevation-0 rounded-0">
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

const store = useTableStore()

const itemsPerPage: Ref<number> = ref(5);
const headers = ref([
  {
    title: 'ID',
    align: 'start',
    sortable: true,
    key: 'id',
  },
  {
    title: 'Full Name',
    align: 'start',
    sortable: true,
    key: 'name',
  },
  {
    title: 'Created At',
    align: 'start',
    sortable: true,
    key: 'createdAt',
  },
  // {
  //   title: 'Last update',
  //   align: 'start',
  //   sortable: true,
  //   key: 'updated',
  // },
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
