import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app, database } from "./firebase";

export const readTodoList = async (table) => {};

export const checkTask = async (table, taskId, Completed) => {
  let docRef = doc(database, table, taskId);

  updateDoc(docRef, {
    Completed,
  });
};

export const updateTask = async (table, taskId, Title) => {
  let docRef = doc(database, table, taskId);

  updateDoc(docRef, {
    Title,
  });
};
export const AddTask = async (table, newTsk) => {
  // setMessages([...messages, msgObj]);
  const data = await addDoc(collection(database, table), newTsk);
  return data;
};

export const deleteTask = async (table, taskId) => {
  deleteDoc(doc(database, table, taskId));
};
