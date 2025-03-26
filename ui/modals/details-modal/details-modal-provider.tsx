import { createContext, useContext, useState } from "react";

export const DetailsModalContext = createContext<{
  isVisible: boolean;
  context: string;
  setIsVisible: (state: boolean) => void;
  closeDetailsModal: () => void;
  openDetailsModal: (context?: string) => void;
  onCloseDetailsModal: (action: () => void) => void;
}>({
  isVisible: false,
  context: "",
  setIsVisible: (state) => {},
  closeDetailsModal: () => {},
  openDetailsModal: () => {},
  onCloseDetailsModal: () => {},
});

export function DetailsModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [context, setContext] = useState<string>("");
  const [closeAction, setCloseAction] = useState<() => void>();

  const onCloseDetailsModal = (action: () => void) => {
    setCloseAction(() => () => action());
  };

  const setIsOpenModal = (state: boolean) => {
    setIsVisible(state);
  };
  const closeDetailsModal = () => {
    closeAction && closeAction();
    setIsVisible(false);
    setContext("");
  };
  const openDetailsModal = (contextModal?: string) => {
    setIsVisible(true);
    setContext(contextModal || "");
  };

  return (
    <DetailsModalContext.Provider
      value={{
        isVisible,
        context,
        setIsVisible: setIsOpenModal,
        closeDetailsModal,
        openDetailsModal,
        onCloseDetailsModal,
      }}
    >
      {children}
    </DetailsModalContext.Provider>
  );
}

export const useDetailsModalContext = () => useContext(DetailsModalContext);
