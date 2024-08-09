import React from "react";
import Link from 'next/link'

const Button = () => {
    return (
     <>
     <Link href="/home">
        <button className="bg-green-400 rounded text-white hover:scale-110
px-5 py-2">
            Shop
        </button>
    </Link>
    </>
    );
};

export default Button;