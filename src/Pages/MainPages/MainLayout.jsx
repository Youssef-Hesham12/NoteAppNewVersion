import React from 'react'
import { Outlet } from 'react-router'
import MyNavbar from '../../Components/Navbar'

export default function MainLayout() {
  return (
    <>
    <MyNavbar/>
    <Outlet/>
    </>
  )
}
