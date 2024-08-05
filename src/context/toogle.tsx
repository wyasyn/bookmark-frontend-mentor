import { useContext } from "react";
import { BookmarkContext } from "./provider";

export const useData = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined)
    throw new Error("useData must be used within a ThemeProvider");

  return context;
};
