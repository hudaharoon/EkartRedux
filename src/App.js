
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Kart from './pages/Kart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Kart' element={<Kart />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
