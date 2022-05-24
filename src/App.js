import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Pages/Home/Home';
import Signup from './components/Pages/Signup/Signup';
import Login from './components/Pages/Login/Login';
import Notfound from './components/Pages/Notfound/Notfound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Purchase from './components/Pages/Purchase/Purchase';
import RequiredAuth from './components/Shared/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/purchase/:id' element={<RequiredAuth>
          <Purchase />
        </RequiredAuth>} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
