import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from './Category'
import Card from './Card'
import Carousel from './Carousel'
import Card2 from './Card2'
import ProductAdmin from './ProductAdmin'

export default function Dashboard() {
  return (
    <div>
      <div>
        <Category/>
        <Carousel/>
        <p>Dashboard - Not Logged In</p>
        <Outlet/>
        <div className='mt-3'>
          <Card/>
          <Card2/>
          <ProductAdmin/>
        </div>
      </div>
    </div>
  )
}