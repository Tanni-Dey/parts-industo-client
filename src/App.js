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
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyProfile from './components/Pages/Dashboard/MyProfile/MyProfile';
import MyOrders from './components/Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './components/Pages/Dashboard/AddReview/AddReview';
import Users from './components/Pages/Dashboard/Users/Users';
import RequireAdmin from './components/Shared/RequireAdmin/RequireAdmin';
import RequireUser from './components/Shared/RequireUser/RequireUser';
import AddProduct from './components/Pages/Dashboard/AddProduct/AddProduct';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './components/Pages/Dashboard/Payment/Payment';
import ManageOrders from './components/Pages/Dashboard/ManageOrders/ManageOrders';

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
        <Route path='dashboard' element={<RequiredAuth>
          <Dashboard />
        </RequiredAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='myorder' element={<RequireUser>
            <MyOrders />
          </RequireUser>} />
          <Route path='payment/:id' element={<RequireUser>
            <Payment />
          </RequireUser>} />
          <Route path='addreview' element={<RequireUser>
            <AddReview />
          </RequireUser>} />
          <Route path='makeadmin' element={<RequireAdmin>
            <Users />
          </RequireAdmin>} />
          <Route path='addproduct' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>} />
          <Route path='manageproducts' element={<RequireAdmin>
            <ManageProducts />
          </RequireAdmin>} />
          <Route path='manageorders' element={<RequireAdmin>
            <ManageOrders />
          </RequireAdmin>} />
        </Route>
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
