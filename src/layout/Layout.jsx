import React from 'react'
import { Outlet } from 'react-router-dom'
import ThemeContex from '../data/ThemeContex'
import DataContex from '../data/DataContex'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Layout() {
    return (
        <>
            <DataContex>
                <ThemeContex>
                    <Header />
                    <Outlet />
                    <Footer />
                </ThemeContex>
            </DataContex>
        </>
    )
}

export default Layout