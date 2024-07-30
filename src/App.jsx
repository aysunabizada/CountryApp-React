import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main/Main'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Error404 from './components/Main/Error/Error404'
import CardInfo from './components/Main/CardInfo'

function App() {
  const [data, setData] = useState()
  useEffect(()=>{
    axios.get("https://raw.githubusercontent.com/TheOksigen/purfect_data/main/country.json")
      .then(res => setData(res.data))
  }, [])
  console.log(data);

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main data={data} setData={setData}/>}/>
        <Route path='/:region' element={<Main data={data} setData={setData}/>}/>
        <Route path='/cardinfo' element={<CardInfo/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App