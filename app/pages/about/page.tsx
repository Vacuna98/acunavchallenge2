import Image from "next/image";
import backgroundImage from "@/assets/3601910_67278.jpg";
import NavLink from "@/app/components/NavLink";
import React from "react";
import AccordionCard from "@/app/components/AccordionCard";


const page = () => {
  return (
    
    <div className="relative min-h-screen">
      <Image
        src={backgroundImage}
        alt="Background image"
        quality={100}
        fill // makes the image fill the parent container
        sizes="100vw"
        style={{ objectFit: "cover" }} // ensures the image covers the area without stretching
      />

      <main className="relative z-10 ">
        <NavLink />
        
        <h1 className="text-white text-5xl font-bold flex item-center justify-center mt-10 mb-15">About Bad Bunny🤘 </h1>
        <AccordionCard question={"What has he done that is influential?"} answer={"Bad Bunny has profoundly impacted global music and culture, becoming one of the most-streamed artists in history while centering Puerto Rican identity and the Spanish language"} />
        <AccordionCard question={"Why is he influential to me?"} answer={"Bad Bunny is influential to me because he shows that you can stay true to your culture and still succeed worldwide."} />
        <AccordionCard question={"What qualities make someone influential?"} answer={"Someone is influential when they are authentic, confident, consistent, and able to inspire or impact others through their actions, words, and values."} />
      </main>
    </div>
  );
};

export default page;
