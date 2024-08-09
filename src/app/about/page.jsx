import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-12 shadow-md max-w-lg">

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Meriyl Freya Sequeira</h1>

        <p className="text-gray-700 mb-4">Student at SJEC studying CSDS.</p>
       
        <p className="text-gray-700 mb-4 text-justify">
          I am interested in design, learning new things, and exploring new ideas.
        </p>
        
        <p className="text-gray-700 text-justify mb-7">
          Being in Sceptix has taught me a lot that I couldn’t have learned on my own. The project
          work last semester with the web team, led by Pranav, was especially helpful—I got to learn
          React and Supabase, which was a great experience.
        </p>
      </div>
    </div>
  )
}

export default Page