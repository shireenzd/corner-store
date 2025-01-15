import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductList from './components/products/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderCarousel from './components/HeaderCarousel';
import FilterSection from './components/FilterSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={
          <>
            <HeaderCarousel />
              <ProductList />
          </>
        }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
