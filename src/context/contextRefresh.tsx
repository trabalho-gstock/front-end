import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RefreshContextProps {
    refresh: boolean;
    triggerRefresh: () => void;
}

const RefreshContext = createContext<RefreshContextProps | undefined>(
    undefined
);

export const RefreshProvider = ({ children }: { children: ReactNode }) => {
    const [refresh, setRefresh] = useState(false);

    const triggerRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <RefreshContext.Provider value={{ refresh, triggerRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};

export const useRefresh = () => {
    const context = useContext(RefreshContext);
    if (!context) {
        throw new Error('useRefresh must be used within a RefreshProvider');
    }
    return context;
};
