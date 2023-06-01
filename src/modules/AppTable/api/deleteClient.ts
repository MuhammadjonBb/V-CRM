import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default async function deleteClient(id: string) {
  return await deleteDoc(doc(db, "clients", id));
}

