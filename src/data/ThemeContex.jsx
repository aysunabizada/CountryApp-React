import React, { createContext, useState } from 'react'
export const ThmCntx = createContext()

function ThemeContex({children}) {
    const [theme, setTheme] = useState(true)
    return (
        <ThmCntx.Provider value={{theme, setTheme}}>
            {children}
        </ThmCntx.Provider>
    )
}

export default ThemeContex