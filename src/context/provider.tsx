import { createContext, ReactNode, useState } from "react";

interface BookmarkContextType {
  open: boolean;
  toggleMenu: () => void;
}

export const BookmarkContext = createContext({
  open: false,
  toggleMenu: () => {},
});

export default function BookmarkProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const value: BookmarkContextType = {
    open,
    toggleMenu,
  };
  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  );
}
