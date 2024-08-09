import React from 'react';

function NavBar() {
  return (
    <div className="bg-white p-4 text-center">
      <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Home</button>
      <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Ecommerce page</button>
      <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Products Page</button>
    </div>
  );
}

export default NavBar;