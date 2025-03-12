import { createContext, useContext, useState } from "react";

export const ToBeSureModalContext = createContext<{
  isVisible: boolean;
  setIsVisible: (state: boolean) => void;
  closeToBeSureModal: () => void;
  openToBeSureModal: (context: string) => void;
  onCancel: (cancel: () => void) => void;
  onConfirm: (onConfirm: () => Promise<void>) => void;
  Cancel: () => void;
  Confirm: () => Promise<void>;
  Context: string;
}>({
  isVisible: false,
  setIsVisible: (state) => {},
  closeToBeSureModal: () => {},
  openToBeSureModal: (context) => {},
  onCancel: (cancel) => {},
  onConfirm: () => () => {},
  Cancel: () => {},
  Confirm: () => Promise.resolve(),
  Context: "",
});

export function ToBeSureModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [Context, setContext] = useState("");
  const [Cancel, setCancel] = useState<() => void>(() => {});
  const [Confirm, setConfirm] = useState<() => Promise<void>>(() =>
    Promise.resolve()
  );

  const setIsOpenModal = (state: boolean) => {
    setIsVisible(state);
  };
  const closeToBeSureModal = () => {
    setIsVisible(false);
  };
  const openToBeSureModal = (context: string) => {
    setIsVisible(true);
    setContext(context);
  };
  const onCancel = (onCancel: () => void) => {
    setCancel(onCancel);
  };

  const onConfirm = (confirm: () => Promise<void>) => {
    setConfirm(() => () => confirm());
    Promise.resolve();
  };

  return (
    <ToBeSureModalContext.Provider
      value={{
        isVisible,
        setIsVisible: setIsOpenModal,
        closeToBeSureModal,
        openToBeSureModal,
        onCancel,
        onConfirm,
        Cancel,
        Confirm,
        Context,
      }}
    >
      {children}
    </ToBeSureModalContext.Provider>
  );
}

export const useToBeSureModalContext = () => {
  const context = useContext(ToBeSureModalContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
