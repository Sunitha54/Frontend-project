import { useState } from 'react'
//  import './App.css'
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  ShopCategory  from './Components/Pages/ShopCategory';
import { Product } from './Components/Pages/Product';
import { LoginSignup } from './Components/Pages/LoginSignup.jsx';
import { Shop } from './Components/Pages/Shop.jsx';
import { Cart } from './Components/Pages/Cart.jsx';
import { Footer } from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'



function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path='/' element={<Shop/>}/>
                    <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>

                    <Route  path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>

                    <Route path='/kids' element={<ShopCategory banner={kid_banner}category='kid' />} />
                    {/* <Route path='/product' element={<Product />} >
                    <Route path='/:productId' element={<Product />} />

                    </Route> */}
                    <Route path="/product" element={<Product />}>
                  <Route path=":productId" element={<Product />} /> {/* Remove the leading "/" */}
                    </Route>

                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<LoginSignup />} />

                    



                </Routes>
                <Footer />
                
                
                </BrowserRouter>
        </div>
    );

}

export default App;
