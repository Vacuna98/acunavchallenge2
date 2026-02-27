import { Button, Card } from "flowbite-react";
import Image from "next/image";
import badBunny from "@/assets/badbunny.jpeg";
import React from 'react'


const WhoCard = () => {
  return (
 
    <div className=" flex item-center justify-center">

      <Card
        className="max-w-lg mt-5 bg-pink-600!"
        imgAlt="Bad Bunny"
        imgSrc={badBunny.src}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Bad Bunny
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
          My Favorite Artist of 2026!
        </p>
        <div className="flex justify-center mt-4">
        <Button className="w-40 flex justify-center" href="/pages/about">
          Bad Bunny Facts!
          <svg className="-mr-1 ml-2 h-4 w-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
        </Button>
        </div>

      </Card>
    </div>
  )
}

export default WhoCard