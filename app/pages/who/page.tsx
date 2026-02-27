import Image from "next/image";
import backgroundImage from "@/assets/3601910_67278.jpg";
import badBunny from "@/assets/badbunny.jpeg";
import NavLink from "@/app/components/NavLink";
import WhoCard from "@/app/components/WhoCard";



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

        <NavLink/>


        <h1 className="text-white text-5xl font-bold flex item-center justify-center mt-10 mb-10 p-3">This is who is influential to me!🤍</h1>


        <WhoCard/>
        </main>
    </div>
  )
}

export default page