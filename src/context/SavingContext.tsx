import { useState, useContext, createContext } from "react";
import { AddSaving } from "@/features/savings/data/interface";

interface SavingContextType {
  newSaving: AddSaving | null;
  setNewSaving: (saving: AddSaving) => void;
}

const SavingContext = createContext<SavingContextType | null>(null);

export function SavingProvider({ children }: { children: React.ReactNode }) {
  const [newSaving, setNewSaving] = useState<AddSaving | null>(null);

  return (
    <SavingContext.Provider value={{ newSaving, setNewSaving }}>
      {children}
    </SavingContext.Provider>
  );
}

export const useSavingContext = () => useContext(SavingContext)!;
