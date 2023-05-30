import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import beautifyDate from "@/modules/AppTable/helpers/beautifyDate";


interface IClient {
  id: string;
  name: string;
  createdAt: [string, string];
  contacts: object;
}


export async function getClients(): Promise<IClient[]> {
  const querySnapshot = await getDocs(collection(db, "clients"));
  const clients: IClient[] = [];

  querySnapshot.forEach((doc) => {
    clients.push({
      id: doc.id,
      name: doc.data().name,
      createdAt: beautifyDate(doc.data().createdAt),
      contacts: doc.data().contacts
    })
  });

  return clients
}
