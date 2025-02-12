import { NavLink } from "react-router-dom"
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import './navber.css'

function Navbar() {

const link = <>

<nav className="flex  " id="sidebar">

<li> <NavLink to="home">Home</NavLink></li> 
        <li><NavLink to="/statistics">Statistics</NavLink> </li>
        <li> <NavLink to="/dashboard">Dashboard</NavLink></li>
</nav>

</>



    return (
        <div className="navbar mt-  mx-auto  md:max-w-11/12  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {link}
    </ul>
  </div>
  <div className="navbar-end gap-10">
   <button className="btn rounded-full cursor-pointer bg-white btn-outline btn-primary"> <FiShoppingCart className="  text-2xl  "></FiShoppingCart></button>
    <button className="btn rounded-full bg-white btn-outline btn-primary"><AiOutlineHeart className="text-2xl "></AiOutlineHeart></button>
  </div>
</div>
    )
}

export default Navbar
