// Utilities
import { defineStore } from 'pinia'
import { getClients } from '@/modules/AppTable/api/getClients';
import { Ref, ref } from 'vue'

interface IClient {
  id: string;
  fullname: string;
  createdAt: [string, string];
  contacts: object;
}

export const useTableStore = defineStore('table', () => {
  const clients: Ref<IClient[]> = ref([]);

  function setClients() {
    getClients().then((data: IClient[]) => {
      clients.value = data;
    })
  }

  return {
    clients,
    setClients
  }
})
