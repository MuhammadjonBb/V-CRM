import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default async function updateClient(client: object) {
  const clientRef = doc(db, "clients", client.id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(clientRef, {
    name: client.name,
    surname: client.surname,
    contacts: client.contacts,
  });
}
