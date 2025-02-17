import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductId from './pages/ProductId';
import Purchases from './pages/Purchases';
import Cart from './pages/Cart';
import ProtectedRoutes from './components/app/ProtectedRoutes';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductId />} />
        
        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
