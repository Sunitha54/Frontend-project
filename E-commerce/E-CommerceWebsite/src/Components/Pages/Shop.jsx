import React from 'react'
import { Hero } from '../Hero/Hero'
 import {  Popular }  from '../Popular/Popular'
import { Offers } from '../Offers/Offers'
import { NewCollections } from '../NewCollection/NewCollections'
import { NewsLetter } from '../NewsLetter/NewsLetter'
// Shop.jsx

// import { Popular } from '/src/Components/Popular/Popular.jsx';  // Import with curly braces for named export

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
      
      
    </div>
  )

}
