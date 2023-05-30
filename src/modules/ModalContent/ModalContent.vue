<template>
  <v-card class="py-6 ">
    <v-card-title class="px-9 pa-0 mb-5">
      {{ title }}
      <span v-if="mode === 'edit'" class="ml-3 font-weight-regular text-body-2 text-grey">
        ID: {{ clientData.id }}
      </span>
    </v-card-title>

    <div class="input-group px-9">
      <ModalInput v-model="clientInfo.name" label="Name" />
      <ModalInput v-model="clientInfo.name" label="Surname" :mode="mode" />
      <ModalInput v-model="clientInfo.name" label="Lastname" :mode="mode" />
    </div>

    <AddContactBolck :contacts="clientInfo.contacts" />

    <Primary class="px-9 mt-5 mx-auto" size="large" label="save" />

  </v-card>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import ModalInput from "@/modules/ModalContent/components/ModalInput.vue";
import AddContactBolck from "@/modules/ModalContent/components/AddContactBolck.vue";
import Primary from "@/UI/button/Primary.vue";

const props = defineProps({
  title: String,
  clientData: Object,
  mode: String,
})

const clientInfo = ref({
  name: "",
  surname: "",
  lastname: "",
  contacts: {},
})
</script>

