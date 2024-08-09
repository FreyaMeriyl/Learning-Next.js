//Task 3
/*If I replace 'p-24' with 'p-25' padding doesn't work.
This is because tailwind has predefined padding classes
and this specific p-25 is not included in it.
But if I change it to p-20 or p-16,etc, padding will work*/

import React from 'react'
import Button from '@/components/button';

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
        <Button />
      </div>
    </div>
  )
}

export default Page
