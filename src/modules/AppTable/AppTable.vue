<template>
  <div class="table-wrapper">
    <v-data-table flat v-model:items-per-page="itemsPerPage" :headers="headers" :items="clients" item-value="name"
      class="elevation-0 rounded">
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
    title: 'Date and time of creation',
    align: 'start',
    sortable: true,
    key: 'created',
  },
  {
    title: 'Last update',
    align: 'start',
    sortable: true,
    key: 'updated',
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

const clients = ref([
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 123455,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 2,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 1,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  },
  {
    id: 123455,
    name: 'John Doe',
    created: '2020-01-01',
    updated: '2020-01-01',
    contacts: [
      {
        id: 1,
        type: 'phone',
        value: '+1 (234) 567-89-10',
      }
    ]
  }
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
