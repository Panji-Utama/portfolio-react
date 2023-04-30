import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(){
    return <nav className="bg-darker-navy p-4">
    <ul className="flex justify-center gap-4">
      <li><Link to="/" className="px-4 py-2 text-white font-bold rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black" href="#">Home</Link></li>
      <li><Link to="/portfolio" className="px-4 py-2 text-white font-bold rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black" href="#">Portfolio</Link></li>
      <li><Link to="/about" className="px-4 py-2 text-white font-bold rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black" href="#">About</Link></li>
      <li><Link to="/contact" className="px-4 py-2 text-white font-bold rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black" href="#">Contact</Link></li>
    </ul>
  </nav>
}