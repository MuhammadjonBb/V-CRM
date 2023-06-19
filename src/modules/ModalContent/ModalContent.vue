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
      <ModalInput v-model="clientInfo.surname" label="Surname" :mode="mode" />
    </div>

    <AddContactBolck :contacts="clientInfo.contacts" @update:contacts="setClientContact" />

    <Primary class="px-9 mt-5 mx-auto" size="large" label="save" @click="onSave" />

  </v-card>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import ModalInput from "@/modules/ModalContent/components/ModalInput.vue";
import AddContactBolck from "@/modules/ModalContent/components/AddContactBolck.vue";
import Primary from "@/UI/button/Primary.vue";
import addClient from "@/modules/ModalContent/api/addClient";
import { useTableStore } from "@/modules/AppTable/store/table";
import updateClient from "@/modules/AppTable/api/updateClient";

const { setClients } = useTableStore()

const props = defineProps({
  title: String,
  clientData: Object,
  mode: String,
  modal: Boolean
})
const emit = defineEmits(["update:modal"])

const clientInfo = ref({
  id: props.clientData.id,
  name: "",
  surname: "",
  contacts: props.clientData.contacts || [],
  createdAt: Date.now()
})

onMounted(() => {
  if (props.mode === "edit") {
    const fullname = (props.clientData.fullname).split(" ");
    clientInfo.value.name = fullname[0];
    clientInfo.value.surname = fullname[1];
  }
})

function setClientContact(data: any) {
  clientInfo.value.contacts = data;
}

function onSave() {
  if (props.mode === "create") {
    const clientPostInfo = {
      name: clientInfo.value.name,
      surname: clientInfo.value.surname,
      contacts: clientInfo.value.contacts
    }
    addClient(clientPostInfo).then(() => {
      emit("update:modal", false)
      setClients()
    })
  } else if (props.mode === "edit") {
    updateClient(clientInfo.value).then(() => {
      emit("update:modal", false)
      setClients()
    })
  }
}
</script>

