import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";

export const createCategory = async ({
  owner_id,
  title,
}: TypeCreateCategory): Promise<TypeCategory | undefined> => {
  try {
    const db = firebaseInstance.db;
    const categoryPath = collection(db, "categories");
    const body: TypeCategory = {
      owner_id,
      title,
      totalLikes: 0,
      totalSnnipets: 0,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(categoryPath, body);
    const newDoc: DocumentData = await getDoc(docRef);
    const response: TypeCategory = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (error: any) {
    console.warn(error);
  }
};

export const getAllCategories = async (): Promise<TypeCategory[]> => {
  const db = firebaseInstance.db;
  const categoryPath = collection(db, "categories");
  const documents = await getDocs(categoryPath);
  const allCategories: TypeCategory[] = documents.docs.map(
    (document: DocumentData) => {
      return { ...document.data(), id: document.id };
    }
  );

  return allCategories;
};
