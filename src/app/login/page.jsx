import React from 'react';
import Link from 'next/link'

function LoginPage() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className=" text-3xl font-bold mb-4 text-gray-700 text-center">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Email"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 " id="password" type="password" placeholder="Password"/>
          </div>

          <div className="flex items-center justify-between">
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-60 h-10" type="submit"> Login</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;