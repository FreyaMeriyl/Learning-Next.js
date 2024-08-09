import React from 'react';
import Link from 'next/link'

function Footer() {
  return (
    <footer className=" footerbg-white p-4 text-center">
      <Link href="/">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Home</button>
      </Link>

      <Link href="/products">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Products</button>
      </Link>

      <Link href="/about">
        <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">About</button>
      </Link>
    </footer>
  );
}

export default Footer;