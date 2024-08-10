import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from "/public/img1.png"

function Footer() {
  return (
    <footer className="bg-white w-full flex justify-between items-center">
      <div className="flex items-center">
        <Image src={img1} alt='logo' width={50} height={100} className='h-10'/>
      </div>
      <div className="flex justify-center">

        <Link href="/products">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Shop</button>
        </Link>

        <Link href="/">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">Newsletter</button>
        </Link>

        <Link href="/">
          <button className="m-2 p-2 text-gray-800 rounded hover:text-blue-900">FAQ'S</button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;