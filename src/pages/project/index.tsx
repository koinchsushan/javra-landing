import React, { useState } from "react";
import { enza, euro, logotool, pf, proponent } from "../../assests";
interface ProjectFeature {
  key: number;
  list: string;
}

interface ProjectItem {
  name: string;
  subTitle?: string;
  desc: string;
  shortDesc: string;
  color?: string;
  img: any;
  features: ProjectFeature[];
}
const Project: React.FC = () => {
  const projectList: ProjectItem[] = [
    {
      name: "PF CONCEPT – PRD",
      subTitle: "(Production Reporting Device)",
      desc: "JAVRA and PF Concept developed the PRD platform which allows the monitoring and control of the production process of one of the biggest merchandizing factories in Europe.",
      shortDesc: "Nowadays the PRD solution:",
      color: "pf-color",
      img: pf,
      features: [
        {
          key: 1,
          list: "Displays production status",
        },
        {
          key: 2,
          list: "Prepares metrics",
        },
        {
          key: 3,
          list: "Prepares all the necessary steps for the production",
        },
      ],
    },
    {
      name: "PROPONENT",
      subTitle: "(Machine Learning)",
      desc: "JAVRA and Proponent proactively initiated the use of Machine Learning software to simplify and enhance the quotation process by leveraging automation and machine learning technologies.",
      shortDesc: "Nowadays the Machine Learning solution can:",
      img: proponent,
      color: "proponent-color",
      features: [
        {
          key: 1,
          list: "Automatically scan and analyse customers’ email information",
        },
        {
          key: 2,
          list: "Extract critical details like product serial numbers and quantities.",
        },
      ],
    },
    {
      name: "SEED QUALITY ANALYSIS",
      desc: "JAVRA developed a software tool that enabled the easy analysis of seed quality, thus increasing the companys confidence in its products and, consequently, the selling price. A machine learning model was created to analyse and clarify x-ray seed images to place them in the correct category.",
      shortDesc: "Nowadays the Machine Learning solution can:",
      img: enza,
      color: "enza-color",
      features: [
        {
          key: 1,
          list: "Accurately predict 80-90% of seed quality, compared to their old software that could only predict 40-45%",
        },
        {
          key: 2,
          list: "Increase confidence in the sale of seeds and consequently increased their selling price.",
        },
      ],
    },
    {
      name: "LOGO TOOL",
      desc: "JAVRA developed a software that is used as a product personalization tool and embedded it in the PF Store (Magento web shop).",
      shortDesc: "With this solution customers are now capable of:",
      img: logotool,
      features: [
        {
          key: 1,
          list: "Add their brand logo/artwork on the products they are going to buy",
        },
        {
          key: 2,
          list: "Visualize the product and how it looks before ordering",
        },
        {
          key: 3,
          list: "Visualize the product in 3d/realistic view",
        },
        {
          key: 4,
          list: "Generate realistic mood images with their logos",
        },
      ],
    },
    {
      name: "EURO-MIT",
      desc: "JAVRA developed a typical ERP system (also called EMM5 application) using X/E Framework in Openedge 4GL. It helped Euro-Mit with all their resource planning and workflow. The software system helped EMS to automate and manage the core business process for optimal performance.",
      shortDesc:
        "In fact, the main advantages of using the X/E framework for EMM5 application are:",
      img: euro,
      color: "mit-color",
      features: [
        {
          key: 1,
          list: "Automatically scan and analyse customers email information",
        },
        {
          key: 2,
          list: "Extract critical details like product serial numbers and quantities.",
        },
      ],
    },
  ];
  const [showProject, setShowProject] = useState("");
  const handleProjectClick = (projectName: string) => {
    if (projectName === showProject) {
      setShowProject("");
    } else {
      setShowProject(projectName);
    }
  };
  return (
    <div className="project-container">
      {projectList?.map((item: ProjectItem, idx: number) => (
        <div className="py-6" key={idx}>
          {showProject === item.name && (
            <img
              loading="lazy"
              className="responsive_img"
              src={item.img}
              alt={item.name}
            />
          )}
          <h4 className={`company-title cursor-pointer my-2 ${item.color}`} onClick={() => handleProjectClick(item?.name)}>{item.name}</h4>
          {showProject === item.name && (
            <>
              <span className="mini-title">{item?.subTitle}</span>
              <p className="my-2">{item.desc}</p>
              <p className="my-2">{item.shortDesc}</p>
              <div>
                {item.features?.map((data: ProjectFeature) => (
                  <li key={data?.key}>{data?.list}</li>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;
