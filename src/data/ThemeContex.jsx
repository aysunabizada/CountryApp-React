import React, { createContext, useState, useEffect } from 'react';
export const ThmCntx = createContext();

function ThemeContex({ children }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme !== null ? JSON.parse(savedTheme) : true;
    })

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme]);

    return (
        <ThmCntx.Provider value={{ theme, setTheme }}>
            {children}
        </ThmCntx.Provider>
    )
}

export default ThemeContex;
