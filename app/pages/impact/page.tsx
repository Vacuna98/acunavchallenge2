import Image from "next/image";
import backgroundImage from "@/assets/3601910_67278.jpg";
import NavLink from "@/app/components/NavLink";
import React from "react";
import AccordionCard from "@/app/components/AccordionCard";


const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
        
        <h1 className="text-white text-5xl font-bold flex item-center justify-center mt-10 mb-15">3 Major Impact Bad Bunny has had</h1>
        <AccordionCard question={"1. Made Spanish-Language Music Globally Dominant"} answer={"Through albums like Un Verano Sin Ti, he became one of the most streamed artists in the world — without switching to English. He proved that artists don't need to change their language or culture to achieve worldwide success, opening doors for more Latin artists."} />
        <AccordionCard question={"2. Challenged Gender Norms & Masculinity"} answer={"He has publicly worn nail polish, skirts, and nontraditional fashion while promoting respect and equality. He helped normalize self-expression and encouraged conversations about toxic masculinity and LGBTQ+ inclusion in Latin culture."} />
        <AccordionCard question={"3. Used His Platform for Social & Political Advocacy"} answer={"He has spoken out about corruption in Puerto Rico, gender violence, and government accountability — even participating in protests that led to political change in Puerto Rico.He showed that entertainers can use their influence to raise awareness and push for social change."} />
      </main>
    </div>
  );
};

export default page;
