import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductList from './components/products/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import CartIcon from './components/cart/CartIcon';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/cart/CartProvider';

function App() {
  const products = [
    { name: "Swing", image: "/swing.jpg", price: "10.99", id: "product1" },
    { name: "Storage Bench", image: "/storage-bench.jpg", price: "20.99", id: "product2" },
    { name: "Chair", image: "/chair.jpg", price: "30.99", id: "product3" },
    { name: "Organizer", image: "/storage-box.jpg", price: "40.99", id: "product4" },
    { name: "Bloom Diffuser", image: "/bloom-diffuser.jpg", price: "50.99", id: "product5" },
    { name: "Kids Chair", image: "/kids-chair.jpg", price: "60.99", id: "product6" },
    { name: "Desk decor", image: "/desk-decor.jpg", price: "70.99", id: "product7" },
    { name: "Wall Clock", image: "/wall-clock.jpg", price: "80.99", id: "product8" }
  ]

  return (
    <CartProvider product={products}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={
            <>
              <HeaderCarousel />
              <ProductList products={products} />
              <CartIcon />
            </>
          }
          />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;