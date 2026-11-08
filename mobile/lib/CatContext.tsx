import React, { createContext, useContext, useState } from "react";

interface CatContextType {
  currentCatId: string;
  setCurrentCatId: (id: string) => void;
}

const defaultCat = process.env.EXPO_PUBLIC_DEFAULT_CAT || "luna";

const CatContext = createContext<CatContextType>({
  currentCatId: defaultCat,
  setCurrentCatId: () => {},
});

export function CatProvider({ children }: { children: React.ReactNode }) {
  const [currentCatId, setCurrentCatId] = useState<string>(defaultCat);

  return (
    <CatContext.Provider value={{ currentCatId, setCurrentCatId }}>
      {children}
    </CatContext.Provider>
  );
}

export function useCat() {
  return useContext(CatContext);
}
