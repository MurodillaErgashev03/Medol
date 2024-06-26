import React, { useEffect } from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import { Outlet, useLocation } from 'react-router-dom'

function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0)
  }, [location.pathname])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout