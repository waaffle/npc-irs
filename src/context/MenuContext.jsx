import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = () => {
        setIsOpen((state) => !state);
    }

    return (
        <MenuContext.Provider value={{ isOpen, changeOpen }}>
            {children}
        </MenuContext.Provider>
    );
};