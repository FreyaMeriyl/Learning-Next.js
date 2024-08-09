import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
    <div className="bg-white p-12 shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">Products</h1>
        <p className="mb-4 text-gray-700 text-justify">
            This page contains the products that includes the image,
            price and a short description of the product.
        </p>
    </div>
    </div>
  )
}

export default page