import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './Products/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import ProductDetails from './Products/ProductDetails/ProductDetail';


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
    <BrowserRouter>
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/products/:productId' element={<ProductDetails />} /> 
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
