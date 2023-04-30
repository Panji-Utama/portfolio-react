import React from 'react';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      {/* Welcome text */}
      <div className="h-screen flex items-center justify-center bg-darker-navy">
        <h1 className="text-3xl font-bold text-white text-center">Welcome to my website!</h1>
      </div>
    </div>
  );
}

export default App;
