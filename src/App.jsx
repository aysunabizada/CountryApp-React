import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Error404 from './components/Main/Error/Error404'
import CardInfo from './components/Main/CardInfo'
import DataContex from './data/DataContex'
import ThemeContex from './data/ThemeContex'
import Region from './components/Main/Region'

function App() {
    return (
        <>
            <DataContex>
                <ThemeContex>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/region/:region' element={<Region />} />
                        <Route path='/country/:alpha3Code' element={<CardInfo />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                    <Footer />
                </ThemeContex>
            </DataContex>
        </>
    )
}

export default App