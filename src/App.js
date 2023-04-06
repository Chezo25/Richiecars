import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Bookingcar from './pages/bookingCar';
import Login from './pages/login';
import Register from './pages/register';
import 'antd/dist/reset.css';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookingcar" element={<Bookingcar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register"  exact component={<Register />} />        
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
