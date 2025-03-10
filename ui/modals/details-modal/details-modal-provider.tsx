import { createContext, useContext, useState } from "react";

export const DetailsModalContext = createContext<{
  isVisible: boolean;
  setIsVisible: (state: boolean) => void;
  closeDetailsModal: () => void;
  openDetailsModal: () => void;
}>({
  isVisible: false,
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

  const setIsOpenModal = (state: boolean) => {
    setIsVisible(state);
  };
  const closeDetailsModal = () => {
    setIsVisible(false);
  };
  const openDetailsModal = () => {
    setIsVisible(true);
  };

  return (
    <DetailsModalContext.Provider
      value={{
        isVisible,
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
