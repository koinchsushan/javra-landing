import React, { useState } from "react";
import {
  AI,
  development,
  ecommerce,
  pimcore,
  progress,
  web,
} from "../../assests";
interface ServiceItem {
  title: string;
  desc: string;
  img: any;
}
const Services: React.FC = () => {
  const serviceList: ServiceItem[] = [
    {
      title: "PIMCORE Development",
      desc: "JAVRA is a Pimcore Platinum Partner, developing several projects for international companies with thousands of products managed by this platform.",
      img: pimcore,
    },
    {
      title: "Customised Development",
      desc: "Each client is unique, as is their business. We develop solutions from scratch to boost your business.",
      img: development,
    },
    {
      title: "Machine Learning / AI",
      desc: "In line with market developments and demands, we develop products and platforms using the latest ML/AI technologies.",
      img: AI,
    },
    {
      title: "Progress Services",
      desc: "We can deliver the full Progress and OpenEdge portfolio to any size organisation at absolute cost.",
      img: progress,
    },
    {
      title: "E-Commerce",
      desc: "Each customer has a dedicated team to help develop and maintain their applications. Business critical platforms are supported by our 24/7 managed services.",
      img: ecommerce,
    },
    {
      title: "Web App Development",
      desc: "Mobile-ready web applications using the latest technologies to control your business or sell your products.",
      img: web,
    },
  ];
  return (
    <div className="services-container">
      <div>
        <div className="flex flex-wrap">
          {serviceList?.map((item: ServiceItem, idx: number) => (
            <div className="py-4 md:w-1/3 flex" key={idx}>
              <div className="green-rectangle  mb-4 ">
                <img src={item?.img} alt="" />
              </div>
              <div className="flex-grow pl-6">
                <span className="title">{item?.title}</span>
                <p>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
