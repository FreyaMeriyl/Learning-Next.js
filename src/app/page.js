//Task 3
/*If I replace 'p-24' with 'p-25' padding doesn't work.
This is because tailwind has predefined padding classes
and this specific p-25 is not included in it.
But if I change it to p-20 or p-16,etc, padding will work*/

import React from 'react'
import Button from '@/app/components/button';
import Footer from './components/Footer';
import Image from 'next/image';
import random from "/public/random.png"

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white p-12 shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-700">E-commerce Home Page</h1>
          <p className="mb-4 text-gray-700 text-justify">
            The header or the top part of the page includes a logo, 
            navigation bar and a hero section which highlights special 
            offers and new products.
            <Image src={random} alt='random pic' width={100} height={100} className='h-20'/>
          </p>

          <p className="mb-4 text-gray-700 text-justify">
            The next part contains the link that takes you to the product 
            page
          </p>

          <p className="mb-4 text-gray-700 text-justify">
            Next contains the customer reviews or testimonials who have 
            bought products which will help new customers see what others 
            think of the store and its items.
          </p>

          <p className="mb-4 text-gray-700 text-justify">
            The footer or the bottom part of this page contains contact info,
            newsletter signups, etc.
          </p>

          <Button/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page