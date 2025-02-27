import { createContext, useContext, useState, useEffect } from 'react';

interface SpinnerContextType {
    isSpinner: boolean;
    setSpinner: (loading: boolean) => void;
}

const SpinnerContext = createContext<SpinnerContextType | null>(null);
let setSpinnerRef: ((loading: boolean) => void) | null = null;

export const SpinnerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSpinner, setIsSpinner] = useState<boolean>(false);

    const setSpinner = (loading: boolean) => {
        setIsSpinner(loading);
    };

    useEffect(() => {
        setSpinnerRef = setSpinner;
        return () => {
            setSpinnerRef = null;
        };
    }, []);

    return (
        <SpinnerContext.Provider value={{ isSpinner, setSpinner }}>
            {children}
        </SpinnerContext.Provider>
    );
};

export const useSpinner = () => useContext(SpinnerContext)!;

export const setSpinner = (loading: boolean) => {
    if (setSpinnerRef) {
        setSpinnerRef(loading);
    } else {
        console.warn('SpinnerProvider is not mounted.');
    }
};