import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import UserProfile from '@/pages/User/UserProfile'
import Prescription from '@/components/Prescription/Prescription'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            {/* <Routers /> */}
            {/* <UserProfile/> */}
            <Prescription></Prescription>
        </main>
        <Footer />
    </div>
  )
}

export default Layout