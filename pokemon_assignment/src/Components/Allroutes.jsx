import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Listing } from '../Pages/Listing'
import { Details } from '../Pages/Details'
import { Bookmarks } from '../Pages/Bookmarks'
import { Searching } from '../Pages/Searching'

export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Listing/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/bookmark' element={<Bookmarks/>}/>
        <Route path='/search' element={<Searching/>}/>
    </Routes>
  )
}
