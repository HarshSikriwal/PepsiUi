import { createContext, useState } from "react";
import { Products } from "../PepsiDetails";

export const DetailsContext = createContext<{
  myProduct: (typeof Products)[0];
  setMyProduct: React.Dispatch<React.SetStateAction<(typeof Products)[0]>>;
}>({
  myProduct: Products[1],
  setMyProduct: () => null,
});

const DetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [myProduct, setMyProduct] = useState(Products[1]);
  return (
    <DetailsContext.Provider value={{ myProduct, setMyProduct }}>
      {children}
    </DetailsContext.Provider>
  );
};
export default DetailsProvider;
