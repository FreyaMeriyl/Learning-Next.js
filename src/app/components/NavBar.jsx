import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import img1 from "/public/img1.png"

function NavBar() {
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={img1} alt='logo' width={100} height={100} className='h-20'/>
        <h1 className="text-3xl font-bold mb-4 text-gray-700 ml-4">ShopSphere</h1>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Home</button>
        </Link>

        <Link href="/products">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Products</button>
        </Link>

        <Link href="/about">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">About</button>
        </Link>

        <Link href="/login">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Log in</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;