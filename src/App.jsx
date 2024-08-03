import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="bg-primary min-h-screen flex flex-col overflow-x-hidden">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow ml-12 md:ml-16">
          <Navbar />
          <main className="flex-1 p-4 overflow-auto">
            <Home />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

