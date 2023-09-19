import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers';
import EditUser from './Components/EditUser';
import Navbar from './Components/Navbar';
import Notfound from './Components/Notfound';
import UserDetails from './Components/UserDetails';
import ContextProvider from './Context/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/allusers' element={<AllUsers />} />
          <Route path='/adduser' element={<AddUsers />} />
          <Route path='/getUsers/:id' element={<UserDetails />} />
          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
