import Image from "next/image";
import backgroundImage from "../assets/3601910_67278.jpg";
import InfluentialCard from "./components/InfluentialCard";
import NavLink from "./components/NavLink";

export default function Home() {
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
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pt-8 pb-12">
          <InfluentialCard />
        </div>
      </main>
    </div>
  );
}
