import React, { useState } from "react";

const LeftPanel = ({ onSelect }) => {
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => onSelect("ISTE-VESIT")}
        className="p-4 bg-blue-500 text-white rounded"
      >
        ISTE-VESIT
      </button>
      <button
        onClick={() => onSelect("NISSAN CORPORATION")}
        className="p-4 bg-green-500 text-white rounded"
      >
        NISSAN CORPORATION
      </button>
      <button
        onClick={() => onSelect("SUD-LIFE-INSURANCE")}
        className="p-4 bg-red-500 text-white rounded"
      >
        SUD-LIFE-INSURANCE
      </button>
    </div>
  );
};

const MainComponent = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (section) => {
    setSelected(section);
  };

  const experiences = {
    "ISTE-VESIT": {
      organization: "ISTE - VESIT",
      role: "Senior Technical Officer",
      timeframe: "2021 – Present",
      responsibilities: [
        "Conducted Technical Workshops",
        "Contributing to Event Documentation",
        "Organized a 24-hour Hackathon for students",
      ],
    },
    "NISSAN CORPORATION": {
      organization: "Nissan Motor Corporation",
      role: "Data Analyst Intern",
      timeframe: "04/2023 - Present",
      responsibilities: [
        "Automating the process of report generation",
        "Investigating the reasons behind higher-than-anticipated data consumption in vehicles",
      ],
    },
    "SUD-LIFE-INSURANCE": {
      organization: "SUD Life Insurance",
      role: "Software Developer Intern",
      timeframe: "2022 – 2023",
      responsibilities: [
        "Working on a Software product to automate data validation for multiple insurance policies",
      ],
      techStack: "Next.js, Python Flask",
    },
  };

  return (
    <div className="flex h-[50vh]">
      <div className="w-1/4 bg-gray-100 flex justify-center items-center">
        <div className="p-4">
          <LeftPanel onSelect={handleSelect} />
        </div>
      </div>
      <div className="w-3/4 p-4 bg-creme">
        {selected && (
          <div>
            <h1 className="text-3xl mb-4">
              {experiences[selected].organization}
            </h1>
            <p>
              <strong>Role:</strong> {experiences[selected].role}
            </p>
            <p>
              <strong>Timeframe:</strong> {experiences[selected].timeframe}
            </p>
            <p>
              <strong>Key Responsibilities:</strong>
            </p>
            <ul>
              {experiences[selected].responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
            {experiences[selected].techStack && (
              <p>
                <strong>Tech Stack:</strong> {experiences[selected].techStack}
              </p>
            )}
          </div>
        )}
        {!selected && (
          <h1 className="text-3xl">Select an experience to view details.</h1>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
