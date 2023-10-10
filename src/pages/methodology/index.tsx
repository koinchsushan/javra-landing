import React, { useState } from "react";
import { collaboration, Group, quality, vector } from "../../assests";
interface methodologyItem {
  title: string;
  desc: string;
  img: any;
}
const Methodology: React.FC = () => {
  const methodologyItems: methodologyItem[] = [
    {
      title: "Dedicated Product Team",
      desc: "Trust us with the reins of your project. We'll take the lead, delivering end-to-end solutions and making your success our top priority.",
      img: vector,
    },
    {
      title: "Team Augmentation",
      desc: "Strengthen your in-house team with our top-notch IT professionals. It's your project, but with added expertise and resources to ensure it soars to new heights.",
      img: Group,
    },
    {
      title: "Full-Cycle Collaboration",
      desc: "Let us orchestrate the entire project journey. From inception to delivery, we handle every facet, ensuring your success is our unwavering focus.",
      img: collaboration,
    },
    {
      title: "On-Demand Expertise",
      desc: "Expand your team's capabilities as needed. Our seasoned IT professionals seamlessly integrate with your in-house crew, offering flexible support tailored to your project's requirements.",
      img: quality,
    },
  ];
  return (
    <div className="methodology-container">
      <div className="mt-3">
        {methodologyItems?.map((item: methodologyItem, idx: number) => (
          <div className="mb-3 bg-[#D8F6EC]" key={idx}>
            <div className="rounded-lg">
              <div className="flex-grow px-6 py-6">
                <img className="mb-3" src={item?.img} alt={item?.title} />
                <h3 className="title mb-2">{item?.title}</h3>
                <p className="leading-relaxed mb-5 text-gray-500">
                  {item?.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
