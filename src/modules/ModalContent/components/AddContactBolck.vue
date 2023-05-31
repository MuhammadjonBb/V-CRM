<template>
  <div class="bordered px-9 d-flex flex-column" style="background-color: #f4f3f6;">
    <div v-if="contactList.length > 0" class="contacts-wrapper d-flex flex-column mt-5 mb-5" style="gap: 15px;">
      <div v-for="(value, index) in contactList" :key="index" class="d-flex">
        <v-select style="width: 20%;" hide-details color=" primary" density="compact" variant="outlined" :items="items"
          v-model="contactList[index].select"
          @update:model-value="$emit('update:contacts', transformToReqObj(contactList))"></v-select>
        <v-text-field style="width: 25%;" hide-details color="primary" density="compact" class="no-radius"
          v-model="contactList[index].value" variant="outlined"
          @update:model-value="$emit('update:contacts', transformToReqObj(contactList))"></v-text-field>
        <v-btn height="40px" style="width: 15px; min-width: auto;" rounded="0" @click="removeContact(index)"
          variant="outlined" color="grey"><v-icon>mdi-delete</v-icon></v-btn>
      </div>
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
import { onMounted } from 'vue';
import { ref } from 'vue';
import transformProps from '@/modules/ModalContent/helpers/transformProps';
import hasProps from '@/modules/ModalContent/helpers/hasProps';
import transformToReqObj from '../helpers/transformToReqObj';

// eslint-disable-next-line vue/no-setup-props-destructure
const { contacts } = defineProps({ contacts: Object })

const contactList = ref([])
const items = ['Instagram', 'Facebook', 'Twitter', 'Phone', 'Email']

const emit = defineEmits(['update:contacts', 'addContact'])

onMounted(() => {
  if (hasProps(contacts)) {
    contactList.value = transformProps(contacts)
  }
})

function addContact() {
  contactList.value.push({
    select: '',
    value: ''
  })

  emit('addContact', transformToReqObj(contactList.value))
}

function removeContact(index: number): void {
  contactList.value.splice(index, 1)
  emit('addContact', transformToReqObj(contactList.value))
}

</script>

<style>
.bordered {
  border-top: 1px solid #C8C5D1;
  border-bottom: 1px solid #C8C5D1;
}
</style>
