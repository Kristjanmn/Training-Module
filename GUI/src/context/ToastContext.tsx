import { createContext, FC, PropsWithChildren, ReactNode, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import * as RadixToast from '@radix-ui/react-toast';

import { Toast } from 'components';
import { generateUEID } from 'utils/generateUEID';
import { useTranslation } from 'react-i18next';

export type ToastType = {
  type: 'info' | 'success' | 'error' | 'warning';
  title: string;
  message: ReactNode;
}

type ToastTypeWithId = ToastType & { id: string };

type ToastContextType = {
  open: (toast: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType>(null!);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();
  const [toasts, setToasts] = useState<ToastTypeWithId[]>([]);
  const open = (content: ToastType) => {
    setToasts((prevState) => [
      ...prevState,
      { id: generateUEID(), ...content },
    ]);
  };
  const close = (id: string) => {
    setToasts((prevState) => prevState.filter((toast) => toast.id === id));
  };

  useEffect(() => {
    console.log(toasts);
  }, [toasts])

  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      <RadixToast.Provider swipeDirection='right' label={t('global.notification') || 'Notification'}>
        {children}
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} close={() => close(toast.id)} />
        ))}
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
};