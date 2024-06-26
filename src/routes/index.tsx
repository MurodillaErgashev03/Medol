import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/home';
import AppLayout from "../layout";
import Products from "../pages/Products/products";
import Servies from "../pages/Servies/servies";
import News from '../pages/News/news';
import ProductsAbout from "../pages/Products/components/ProductsAbout/ProductsAbout";
import Commodity from "../pages/Products/components/Commodity/commodity";
import CommodityAbout from '../pages/Products/components/CommodityAbout/commodityAbout'

function RoutElements() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} >
        <Route index element={<Home />} />

        <Route path='/products'>
        <Route index element={<Products />} />
        <Route path=':id' element={<ProductsAbout />} />
        </Route>

        <Route path='/productsAbout'>
        <Route index element={<ProductsAbout />} />
        <Route path=':id' element={<Commodity/>} />
        </Route>

        <Route path='/commodity'>
        <Route index element={<Commodity />} />
        <Route path=':id' element={<CommodityAbout/>} />
        </Route>
        
        <Route path='/servies' element={<Servies />} />
        <Route path='/news' element={<News />} />
      </Route>
    </Routes>
  )
}

export default RoutElements