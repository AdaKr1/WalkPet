import React, { PropsWithChildren, useState } from 'react';

interface ThemeContextValue {
    isDarkModeOn: boolean;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
    isDarkModeOn: false
})

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);

    return <ThemeContext.Provider value={{ isDarkModeOn }}>
        {children}
    </ThemeContext.Provider>
}