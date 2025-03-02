import './App.css';
import { Route, Routes } from 'react-router';
import Cart from 'cart/Cart';
import Wishlist from 'wishlist/Wishlist';
import Home from 'Home/Home';
import NotFound from 'notFound/NotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digitfrontEnd" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories/:categoryName" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
