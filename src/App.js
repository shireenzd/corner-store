import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductList from './components/products/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import CartIcon from './components/cart/CartIcon';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/cart/CartProvider';
import ProductDetails from './components/products/ProductDetails';
import Login from './components/Login';

function App() {
  const products = [
    { name: "Swing", image: "/swing.jpg", price: "10.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product1" },
    { name: "Storage Bench", image: "/storage-bench.jpg", price: "20.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product2" },
    { name: "Chair", image: "/chair.jpg", price: "30.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product3" },
    { name: "Organizer", image: "/storage-box.jpg", price: "40.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product4" },
    { name: "Bloom Diffuser", image: "/bloom-diffuser.jpg", price: "50.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product5" },
    { name: "Kids Chair", image: "/kids-chair.jpg", price: "60.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product6" },
    { name: "Desk decor", image: "/desk-decor.jpg", price: "70.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product7" },
    { name: "Wall Clock", image: "/wall-clock.jpg", price: "80.99", description: 'lorem ipsum lorem ipsum lorem ipsum', colors: ['green', 'red', 'yellow'], id: "product8" }
  ]

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={
            <>
              <HeaderCarousel />
              <ProductList products={products} />
              <CartIcon />
            </>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path="/products/:productId" element={<ProductDetails products={products} />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;