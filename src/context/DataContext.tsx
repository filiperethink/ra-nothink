import { createContext, useContext } from "react";
import { TypeCategory, TypeCreateCategory, TypeSnnipet } from "../types";


export interface DataContextType {
    // Category
    create: (category: TypeCreateCategory) => Promise<void>;
    fetch: () => Promise<void>;
    categories: TypeCategory[];
    isLoading: Boolean;
    isCreating: Boolean;

    // Snnipets
    snnipets: TypeSnnipet[];
    fetchSnnipets: (category_id: string) => Promise<void>;
    createSnnnipet: (snnipet: Partial<TypeSnnipet>) => Promise<void>;
}

const DataContext = createContext<DataContextType>(null!);

function useData() {
  return useContext(DataContext);
}

export { DataContext, useData };
