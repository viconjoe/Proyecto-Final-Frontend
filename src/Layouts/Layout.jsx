import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router'
import './Layout.css'


function Layout() {
  return (
    <div id="main-container">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout