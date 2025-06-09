import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';


function App() {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#AD483C] min-h-screen"> 
    <RouterProvider router={router} />
    </div>
  )
}

export default App;
