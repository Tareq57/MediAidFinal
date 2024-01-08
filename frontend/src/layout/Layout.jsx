import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'
import UserProfile from '@/pages/User/UserProfile'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            {/* <Routers /> */}
            <UserProfile/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout