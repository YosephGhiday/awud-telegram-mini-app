import { createContext, useContext, useState, ReactElement, useEffect } from 'react';

export type ModalState = {
    title?: string;
    modal?: ReactElement;
    message?: string;
    closeable?: boolean;
    isCustom?: boolean;
};

interface ModalContextType {
    modals: ModalState[] | null;
    showModal: (modal: ModalState) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);
let setModalsRef: ((modals: ModalState[] | null) => void) | null = null;

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modals, setModals] = useState<ModalState[] | null>(null);

    const showModal = (modal: ModalState) => {
        setModals((prevModals) => (prevModals ? [...prevModals, modal] : [modal]));
    };

    const closeModal = () => {
        setModals((prevModals) => {
            if (prevModals && prevModals.length > 0) {
                const updatedModals = [...prevModals];
                updatedModals.pop();
                return updatedModals.length > 0 ? updatedModals : null;
            }
            return prevModals;
        });
    };
    useEffect(() => {
        setModalsRef = setModals;
        return () => {
            setModalsRef = null;
        };
    }, []);

    return (
        <ModalContext.Provider value={{ modals, showModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext)!;

export const showModals = (modals: ModalState[] | null) => {
    if (setModalsRef) {
        setModalsRef(modals);
    } else {
        console.warn('ModalProvider is not mounted.');
    }
};
