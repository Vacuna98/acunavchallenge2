import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { Button, Card } from "flowbite-react";
import React from "react";

const InfluentialCard = () => {
  return (
    <div>
      <Accordion className="bg-pink-600! mt-10 border-none">
        <AccordionPanel className="border-none bg-pink-600! shadow-xl">
          <AccordionTitle className="text-2xl font-semibold text-black bg-pink-600!">
            What does it take for someone to be considered influential to me?
          </AccordionTitle>
          <AccordionContent>
            <div className="bg-white px-8 py-10">
              <p className="mb-2 text-black">
                Influential people combine emotional intelligence, proactive
                behavior, and strong communication to impact others. They build
                deep, trusting relationships, welcome diverse opinions, and
                confidently pursue a clear vision. Key traits include
                authenticity, high integrity, consistent actions, and a
                willingness to help others succeed
              </p>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <Card className="bg-pink-600! max-w-3xl mx-auto mt-10 text-center">
        <h5 className="text-2xl font-bold tracking-tight  dark:text-white">
          Click Below to know my most influential person!
        </h5>
        <div className="flex justify-center mt-6">
          <Button className="w-30 mt-2 bg-purple-900 hover:bg-purple-800 text-white rounded-full" href="/pages/who">
            Click Here
            <svg
              className="-mr-1 ml-2 h-4 w-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InfluentialCard;
