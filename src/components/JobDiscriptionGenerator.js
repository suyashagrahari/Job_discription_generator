import React from "react";
import imageUrl from "../images/templateGen.png";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
import step5 from "../images/step5.png";
import step6 from "../images/step6.png";
import Cards from "./Cards";

const JobDiscriptionGenerator = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 ">
      <h1 className="text-3xl font-bold text-center mb-10 ">
      How to craft compelling job descriptions
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-[10rem] ">
        <div className="md:w-3/5 mb-10 md:mb-0 mx-auto px-4 md:ml-[10%] md:mr-0">
          <Step
            steps={step1}
            stepNumber="1"
            title="Enter Job Title"
            description="You can start by entering the job title and then hit Generate to create a professional job description in seconds."
          />
          <Step
            steps={step2}
            stepNumber="2"
            title="Enter Company Name (optional)"
            description="Enter the company name if customize the job description for a
            particular company."
          />
          <Step
            steps={step3}
            stepNumber="3"
            title="Select Industry Type (optional)"
            description="Choose the industry type if you want to tailor the job description to a
            particular industry (ex: Computer Software)."
          />
          <Step
            steps={step4}
            stepNumber="4"
            title="Select Language (optional)"
            description="You can choose from language options such as English (US),
            English (UK), Spanish to cater to language specifications."
          />
          <Step
            steps={step5}
            stepNumber="5"
            title="Hit Generate"
            description="You can choose from language options such as English (US),
            English (UK), Spanish to cater to language specifications."
          />
          <Step
            steps={step6}
            stepNumber="5"
            title="Copy or Edit"
            description="Once your job description is ready, copy it to hire top talent for the role.
            You can edit it by simply clicking on the content and making desired changes."
          />
        </div>
        <div className="md:w-1/2 md:h-auto w-full hidden sm:inline  flex justify-center">
          <img
            src={imageUrl}
            alt="Template Generator"
            className="w-[60%] md:max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <Cards />
    </div>
  );
};

const Step = ({ stepNumber, title, description, steps }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="mr-4">
        <span className="text-white rounded-full w-16 h-8 flex items-center justify-center">
          <img src={steps} alt="" />
        </span>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default JobDiscriptionGenerator;
