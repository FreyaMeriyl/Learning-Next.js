import React from 'react'
import Image from 'next/image';
import img3 from "/public/img3.png"
import img4 from "/public/img4.png"
import img5 from "/public/img5.png"
import img6 from "/public/img6.png"
import img7 from "/public/img7.png"
import img8 from "/public/img8.png"
import img9 from "/public/img9.png"
import img10 from "/public/img10.png"
import img11 from "/public/img11.png"
import img12 from "/public/img12.png"

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-12 shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Products</h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img3} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">SneakPops</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img4} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Brunch Loafers</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img5} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Bloack Heel Loafers</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img6} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Oxford Knits</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img7} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">The Eighties</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img8} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">The Wanderers Slip Ons</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img9} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Knit Loafers</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img10} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Urban Casuals</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img11} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">Ease Walk Loafers</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>

          <div className="bg-gray-100 p-4 m-4 shadow-md w-60 text-center">
            <Image src={img12} alt='' width={100} height={100} className='mx-auto'/>
            <h2 className="text-gray-800 font-bold">The Wanderers Sneakers</h2>
            <p className="text-gray-800">Rs. 1299</p>
            <button className="bg-green-400 w-40 h-6 rounded text-white hover:scale-110">
            Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page