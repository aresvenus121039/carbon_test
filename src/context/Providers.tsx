import { createContext, useState } from "react";

export interface ContextType {
  page: string;
  setPage: any
}

export const Context = createContext({} as ContextType);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<string>("");
  
  return (
      <Context.Provider value={{ page, setPage }}>
        {children}
      </Context.Provider>
    );
}

export default Providers