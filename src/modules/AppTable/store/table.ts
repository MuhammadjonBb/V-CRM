// Utilities
import { defineStore } from 'pinia'
import { getClients } from '../api/getClients';
import { Ref, ref } from 'vue'

interface IClient {
  id: string;
  name: string;
  createdAt: [string, string];
  contacts: object;
}

export const useTableStore = defineStore('table', () => {
  const clients: Ref<IClient[]> = ref([]);

  getClients().then((data: IClient[]) => {
    clients.value = data;
  })

  return {
    clients
  }
})
