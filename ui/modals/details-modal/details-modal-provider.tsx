import { createContext, useContext, useState } from "react";

export const DetailsModalContext = createContext<{
  isVisible: boolean;
  context: string;
  setIsVisible: (state: boolean) => void;
  closeDetailsModal: () => void;
  openDetailsModal: (context: string) => void;
}>({
  isVisible: false,
  context: "",
  setIsVisible: (state) => {},
  closeDetailsModal: () => {},
  openDetailsModal: () => {},
});

export function DetailsModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [context, setContext] = useState<string>("");

  const setIsOpenModal = (state: boolean) => {
    setIsVisible(state);
  };
  const closeDetailsModal = () => {
    setIsVisible(false);
    setContext("");
  };
  const openDetailsModal = (contextModal: string) => {
    setIsVisible(true);
    setContext(contextModal);
  };

  return (
    <DetailsModalContext.Provider
      value={{
        isVisible,
        context,
        setIsVisible: setIsOpenModal,
        closeDetailsModal,
        openDetailsModal,
      }}
    >
      {children}
    </DetailsModalContext.Provider>
  );
}

export const useDetailsModalContext = () => useContext(DetailsModalContext);
