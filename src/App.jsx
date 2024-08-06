import React from 'react'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Error404 from './components/Main/Error/Error404'
import CardInfo from './components/Main/CardInfo'
import Region from './components/Main/Region'
import Layout from './layout/Layout'
import WishList from './components/Main/WishList'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path='/region/:region' element={<Region />} />
                    <Route path='/country/:alpha3Code' element={<CardInfo />} />
                    <Route path='/wishlist' element={<WishList />}/>
                    <Route path='*' element={<Error404 />} />
                </Route>
            </Routes>
        </>
    )
}

export default App