// NPM packages
import { doc, collection, getDoc } from "firebase/firestore/lite"; // normal methods
import {
  addDoc,
  setDoc,
  updateDoc,
  deleteField,
  getDocs,
  deleteDoc,
} from "firebase/firestore/lite"; // async methods

// Project files
import { fireStoreInstance } from "scripts/firebase";

export async function createDocument(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const documentReference = await addDoc(collectionReference, data);
  return documentReference.id;
}

export async function createDocumentWithId(path, id, data) {
  const documentReference = doc(fireStoreInstance, path, id);
  await setDoc(documentReference, data);
  return id;
}

export async function updateDocument(path, id, data) {
  const documentReference = doc(fireStoreInstance, path, id);
  await updateDoc(documentReference, data);
}

export async function getDocument(path, id) {
  const documentReference = doc(fireStoreInstance, path, id);
  const document = await getDoc(documentReference);
  return { id: document.id, ...document.data() };
}

export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

export async function deleteDocumentField(path, id, field) {
  const docReference = doc(fireStoreInstance, path, id);
  await updateDoc(docReference, {
    [field]: deleteField(),
  });
}

export async function deleteDocument(path, id) {
  const docReference = doc(fireStoreInstance, path, id);
  await deleteDoc(docReference);
  return { isDeleted: true };
}
