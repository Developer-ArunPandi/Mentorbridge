import {  NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {

    const navStatus=({ isActive }) => ({color: isActive ? "black" : "blue"});

  return (
    <>
     <nav>
      <NavLink to="/home" style={navStatus}>Home</NavLink>
      <NavLink to="/about" style={navStatus}>About</NavLink>
      <NavLink to="/shop" style={navStatus}>Shop</NavLink>
     </nav>
     <Outlet/>
     </>
  )
}

export default Navbar
