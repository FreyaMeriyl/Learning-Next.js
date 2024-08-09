import React from 'react';
import Link from 'next/link'

function NavBar() {
  return (
    <div className="bg-white p-4 text-center">
      <Link href="/">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Home</button>
      </Link>

      <Link href="/products">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Products</button>
      </Link>

      <Link href="/about">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">About</button>
      </Link>
    </div>
  );
}

export default NavBar;