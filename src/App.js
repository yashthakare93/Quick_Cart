import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="flex flex-col min-h-screen md:px-5 px-6 bg-gray-50">
    <BrowserRouter>
    
      <main className="flex-grow pt-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
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
