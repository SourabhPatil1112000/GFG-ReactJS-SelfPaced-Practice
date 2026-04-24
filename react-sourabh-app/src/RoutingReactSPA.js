import './App.css';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';
// NO AuthProvider import here - it should only be in index.js

function RoutingReactSPA() {

  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? 'red' : ''
    }
  }

  return (
    <>
      <p>Nav</p>
      {/* Simple Links - no element prop needed */}
      <Link to="/">Home</Link> ||
      <Link to="/cart">Cart</Link> ||
      <Link to="/about">About</Link> ||
      <Link to="/login">Login</Link>
      
      <br />
      <p>NavLink</p>
      {/* NavLinks with active styles */}
      <NavLink to="/" style={getStyles}>Home</NavLink> ||
      <NavLink to="/cart" style={getStyles}>Cart</NavLink> ||
      <NavLink to="/about" style={getStyles}>About</NavLink> ||
      <NavLink to="/login" style={getStyles}>Login</NavLink> ||

      {/* Single Routes definition */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Route */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default RoutingReactSPA;