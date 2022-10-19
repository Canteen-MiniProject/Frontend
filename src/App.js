import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdditionalRoutes from "./AdditionalRoutes";
import CanteenLogin from './auth/CanteenLogin';
import UserLogin from './auth/UserLogin';
import Register from './auth/Register';
import LandingPage from './pages/LandingPage';


function App() {
  const isloggedIn = true;
  return (
    <div>
      {!isloggedIn && (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/canteenlogin" element={<CanteenLogin/>}/>
            <Route path="/userlogin" element={<UserLogin/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </Router>
      )}

      {isloggedIn && <AdditionalRoutes />}
    </div>
  );
}

export default App;
