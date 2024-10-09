import { createContext, useState, useEffect } from 'react';
import { users } from '../data';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    //Имитация загрузки данных с сервера
    useEffect(() => {
        setItems(users);
    }, []);

    return (
        <DataContext.Provider value={items}>
            {children}
        </DataContext.Provider>
    );
};