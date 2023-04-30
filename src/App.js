import React from 'react';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-darker-navy p-4">
        <ul className="flex justify-center gap-4">
          <li><a className="px-4 py-2 text-white rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black hover:font-bold" href="#">Home</a></li>
          <li><a className="px-4 py-2 text-white rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black hover:font-bold" href="#">About</a></li>
          <li><a className="px-4 py-2 text-white rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black hover:font-bold" href="#">Portfolio</a></li>
          <li><a className="px-4 py-2 text-white rounded-lg ease-in-out duration-300 delay-150 hover:bg-aqua hover:text-black hover:font-bold" href="#">Contact</a></li>
        </ul>
      </nav>
      {/* Welcome text */}
      <div className="h-screen flex items-center justify-center bg-darker-navy">
        <h1 className="text-3xl font-bold text-white text-center">Welcome to my website!</h1>
      </div>
    </div>
  );
}

export default App;
