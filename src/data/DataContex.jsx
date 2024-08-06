import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const Cntx = createContext()

function DataContex({ children }) {
    const [data, setData] = useState()
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/TheOksigen/purfect_data/main/country.json")
            .then(res => setData(res.data))
    }, [])
    
    return (
        <Cntx.Provider value={{data,  wishList, setWishList}}>
            {children}
        </Cntx.Provider>
    )
}

export default DataContex