//Task 3
/*If I replace 'p-24' with 'p-25' padding doesn't work.
This is because tailwind has predefined padding classes
and this specific p-25 is not included in it.
But if I change it to p-20 or p-16,etc, padding will work*/

import React from 'react'
import Button from '@/app/components/button';
import Footer from './components/Footer';
import Image from 'next/image';
import img2 from "/public/img2.png"

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-between">
      <div className=" flex items-center justify-center">
        <div className="bg-white shadow-md relative">
          <Image src={img2} alt='' width={1200} height={1000} className='h-50'/>
          <h1 className="absolute top-20 right-60 text-3xl font-bold mb-4 text-gray-700">
          Step into style -</h1>
          <h1 className="absolute top-32 right-32 text-3xl font-bold mb-4 text-gray-700">
          Discover your perfect pair today!</h1>
          
          <Button/>
          <div className="bg-white p-10 mt-10">
          <h2 className=" text-3xl font-bold mb-4 text-gray-700">
          ShopSphere</h2>

          <p className="mb-4 text-gray-700 text-justify">
          ShopSphere is dedicated to designing stylish shoes and accessories that are fashionable and comfortable for customers. 
          Crafted to perfection, 
          </p>
          <p className="mb-4 text-gray-700 text-justify">
          ShopSphere’s shoes and accessories never fail to amaze. Take a look through our store of online shoes and accessories to bring home a box of joy!
          </p>
          </div>

          <div className="bg-white p-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">
              What our customers say
            </h1>
            <div className="bg-gray-100 p-4 mb-4 rounded shadow-md">
              <p className="text-gray-700 text-justify">
                "I'm obsessed with my new shoes from ShopSphere! They're so comfortable and stylish." - Emily R.
              </p>
            </div>
            <div className="bg-gray-100 p-4 mb-4 rounded shadow-md">
              <p className="text-gray-700 text-justify">
                "ShopSphere has the best customer service I've ever experienced. Highly recommend!" - John D.
              </p>
            </div>
          </div>


          <div className="bg-white p-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">
              Stay in touch
            </h1>
            <div className="flex flex-wrap justify-center mb-4">
            <input type="email" placeholder="Enter your email" className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md" />
              <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-700 text-justify">
              Get the latest news, promotions, and style tips from ShopSphere.
            </p>
          </div>

          <div className="bg-white p-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">
              Contact us
            </h1>
            <p className="text-gray-700 text-justify">
              Have a question or comment? We'd love to hear from you.
            </p>
            <ul className="list-none mb-4">
              <li className="text-gray-700 text-justify">
                <a href="" className="text-blue-600 hover:text-blue-800">
                  shopsphere.com
                </a>
              </li>
              <li className="text-gray-700 text-justify">
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800">
                  +1234567890
                </a>
              </li>
              <li className="text-gray-700 text-justify">
                <a href="https://www.shopsphere.com/contact" className="text-blue-600 hover:text-blue-800">
                  Visit our contact page
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default page