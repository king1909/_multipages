import { Outlet } from "react-router";

import Header from "../Header/Header";
import Navber from "../Navbar/Navber";
import Footer from "../Footer/Footer";

import './Layout.css'

function Layout({products, carts, tab, setTab, setToken}) {
    return ( 
        <div>
            <Header/>
            <Navber products={products} carts={carts} tab = {tab} setTab = {setTab} setToken= {setToken} />
            <Outlet/>
            <Footer/>
        </div>
     );
}

export default Layout;