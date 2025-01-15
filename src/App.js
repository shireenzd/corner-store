import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductList from './components/products/ProductList';

function App() {
  return (
    <div className="App flex flex-col h-screen">
 
    <div className="overflow-y-scroll w-full">
      <Routes>
        <Route path="/*" element={<ProductList />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
