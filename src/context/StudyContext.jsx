import { createContext, useState } from "react";

export const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [pdfText, setPdfText] = useState("");

  return (
    <StudyContext.Provider value={{ pdfText, setPdfText }}>
      {children}
    </StudyContext.Provider>
  );
}