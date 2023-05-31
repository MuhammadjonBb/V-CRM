import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default async function addClient(clientData: any) {
  return await addDoc(collection(db, "clients"), clientData);
}
