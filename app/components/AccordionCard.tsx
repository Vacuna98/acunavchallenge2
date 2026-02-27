import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import React from 'react'

interface AccordionCardProps {
    question: string;
    answer: string;
}

const AccordionCard = ({question, answer} : AccordionCardProps) => {
    console.log("This is the Child Component")

  return (
    <div className="flex items-center justify-center mt-10">

    <Accordion collapseAll className="bg-pink-600! w-2/3">
      <AccordionPanel>
        <AccordionTitle className="text-white! text-3xl text-center">{question}</AccordionTitle>

        <AccordionContent className="bg-white! border-none">
          <p className="mb-2 text-black ">
            {answer}
          </p>
          
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    </div>
  )
}

export default AccordionCard