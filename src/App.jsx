import { useEffect, useState } from "react";

import Home from "./Pages/Home/Home";
import Calculator from "./Pages/Calculator/Calculator";
import Animation from "./Pages/Animation/Animation";
import Components from "./Pages/Components/Components";
import Todo from "./Pages/Todo/Todo";
import Products from "./Pages/Products/Products";
import Carts from "./Pages/Carts/Carts";
import Login from "./Pages/Login/Login";

import { fetchProducts } from "./data/products";


import Layout from "./layouts/Layout/Layout";

import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";



/* browserRouter, HashRouter,  MemoryRouter */

// localhost:5174/<path> BrowserRouter *
// localhost:5174/#/<path> HashRouter * compatable
// localhost:5174/<path> MemoryRouter

// App**->Laout->Navber(buttons)
//tap ->(prop)

const intTab = 'home'

function App() {

  const [token, setToken] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  //fet up in pro
  useEffect(() => setProducts(fetchProducts()), [])

  useEffect(() => console.log(products), [products])

  const [tab, setTab] = useState('')

  useEffect(() => {
      setTab(intTab)
  }, []) //first load

//set token ว่างโชว์หน้าLogin
  if (token === ''  ){
    return (<Login setToken={setToken}/>)
  }else{
    return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route element={<Layout products={products} carts={carts} tab = {tab} setTab = {setTab} setToken = {setToken} />}>
            <Route path={'/'} element={<Home />} />
            {/* Route ไปยังหน้าต่างๆและแสดง */}
            <Route path = {'/home'} element={<Home />} />
            <Route path = {'/calculator'} element={<Calculator/>} />
            <Route path = {'/Animation'} element = {<Animation/>} />
            <Route path = {'/components'} element = {<Components/>} />
            <Route path = {'/todo'} element={<Todo />} />
            <Route path = {'/products'} element = 
            {<Products 
            products={products} 
            carts={carts} 
            setCarts={setCarts}  
            />} 
            />
            <Route path = {'/carts'} element = {<Carts carts={carts} setCarts={setCarts} />} />
          </Route>
        </Routes>
      </HashRouter>

    </div>
  );

  }
  
}

export default App;
