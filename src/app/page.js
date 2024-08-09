//Task 3
/*If I replace 'p-24' with 'p-25' padding doesn't work.
This is because tailwind has predefined padding classes
and this specific p-25 is not included in it.
But if I change it to p-20 or p-16,etc, padding will work*/

import React from 'react'
import Button from '@/app/components/button';

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
    <div className="bg-white p-12 shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-700">E-commerce Home Page</h1>
      <p className="mb-4 text-gray-700 text-justify">
        The header or the top part of the page includes a logo, 
        navigation bar and a hero section which highlights special 
        offers and new products.
        <img src="./images/img1" width="500" height="400" />
      </p>
      <p className="mb-4 text-gray-700 text-justify">
        The next part contains the link that takes you to the product 
        page
        <img src='./images/img2' width="500" height="300" />

      </p>
      <p className="mb-4 text-gray-700 text-justify">
        Next contains the customer reviews or testimonials who have 
        bought products which will help new customers see what others 
        think of the store and its items.
      </p>
      <p className="mb-4 text-gray-700 text-justify">
        The footer or the bottom part of this page contains contact info,
        newsletter signups, etc.
        <img src='./images/img3' width="500" height="300" />
      </p>
      <Button/>
    </div>
    </div>
  )
}

export default page
