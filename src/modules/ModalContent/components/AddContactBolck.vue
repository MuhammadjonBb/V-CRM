<template>
  <div class="bordered px-9 d-flex flex-column" style="background-color: #f4f3f6;">

    <div v-for="(value, index) in contactList" :key="index" class="d-flex mb-5 mt-5">
      <v-select hide-details color="primary" density="compact" class="" variant="outlined" :items="items"
        v-model="contactList[contactList.length - 1].select"></v-select>
      <v-text-field hide-details color="primary" density="compact" class="no-radius"
        v-model="contactList[contactList.length - 1].value" variant="outlined"></v-text-field>
      <v-btn rounded="0" size="xl" @click="removeContact(index)" variant="outlined"
        color="grey"><v-icon>mdi-delete</v-icon></v-btn>
    </div>

    <v-btn @click="addContact" variant="text" prepend-icon="mdi-plus" class="text-capitalize ">
      Add Contact
      <template v-slot:prepend>
        <v-icon color="primary"></v-icon>
      </template>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({ contacts: Object })

const contactList = ref([])
const items = ['Instagram', 'Facebook', 'Twitter', 'Phone', 'Email']

function addContact() {
  contactList.value.push({
    select: '',
    value: ''
  })
}

function removeContact(index: number): void {
  contactList.value.splice(index, 1)
}
</script>

<style>
.bordered {
  border-top: 1px solid #C8C5D1;
  border-bottom: 1px solid #C8C5D1;
}
</style>
