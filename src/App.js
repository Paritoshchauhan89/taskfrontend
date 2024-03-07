import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ContactForm from './components/ContcatForm'
import ViewContact from './components/ViewContact'

const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/add-contact' element={<ContactForm/>}/>
  <Route path='/view-contact' element={<ViewContact/>}/>
  <Route path='*' element={<Home/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App