import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Layout from './components/layout';
import Home from './components/home';
import Products from './components/products';
import ProductInfo from './components/minicomps/productinfo';
import ProductModal from './components/minicomps/productmodal';
import Categories from './components/categories';
import CategoryInfo from './components/categoryinfo';
import Gallery from './components/gallery';
import About from './components/about';
import Contact from './components/contact';
import SiteMap from './components/sitemap';
import Search from './components/minicomps/search';

import spices from './json/spices.json';
import mixes from './json/mixes.json';
import chilies from './json/chilies.json';
import peppers from './json/peppers.json';
import herbs from './json/herbs.json';
import gallery from './json/gallery.json';
import categories from './json/categories.json';

function App() {
  function ModalSwitch() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
      <div>
        <Routes location={background || location}>
          <Route path="/flavors" element={<Layout />}>
            <Route index element={<Home db={spices.concat(mixes, chilies, peppers, herbs)} cat={categories} />} />
            <Route path="products" element={<Products db={spices.concat(mixes, chilies, peppers, herbs)} />} />
            <Route path="products/:id" element={<ProductInfo db={spices.concat(mixes, chilies, peppers, herbs)} />} />
            <Route path="categories" element={<Categories cat={categories} />} />
            <Route path="categories/:id" element={<CategoryInfo db={spices.concat(mixes, chilies, peppers, herbs)} cat={categories} />} />
            <Route path="gallery" element={<Gallery db={gallery} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sitemap" element={<SiteMap db={spices.concat(mixes, chilies, peppers, herbs)} cat={categories} />} />
            <Route path="search" element={<Search db={spices.concat(mixes, chilies, peppers, herbs)} />} />
          </Route>
        </Routes>

        {/* Show the modal when a background page is set */}
        {background && (
          <Routes>
            <Route path="products/:id" element={<ProductModal db={spices.concat(mixes, chilies, peppers, herbs)} />} />
          </Routes>
        )}
      </div>
    );
  }

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
