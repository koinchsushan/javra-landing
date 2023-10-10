import React, { useState } from "react";
import About from "../pages/about";
import Location from "../pages/location";
import Methodology from "../pages/methodology";
import Project from "../pages/project";
import Services from "../pages/services";

interface NavItem {
  title: string;
  name: string;
  component: JSX.Element;
}

const Navbar: React.FC = () => {
  const [showSection, setShowSection] = useState<string | null>(null);
  const navList: NavItem[] = [
    {
      title: "About us",
      name: "about",
      component: <About />,
    },
    {
      title: "Our Location",
      name: "location",
      component: <Location />,
    },
    {
      title: "Our Services",
      name: "service",
      component: <Services />,
    },
    {
      title: "Methodology",
      name: "methodology",
      component: <Methodology />,
    },
    {
      title: "Projects",
      name: "project",
      component: <Project />,
    },
  ];
  const handleClick = (sectioName: string) => {
    if (sectioName === showSection) {
      setShowSection("");
    } else {
      setShowSection(sectioName);
    }
  };
  return (
    <div className="flex flex-wrap justify-between md:flex-row flex-col">
      {navList?.map((item: NavItem, idx: number) => (
        <div key={idx}>
          <h2
            onClick={() => handleClick(item?.name)}
            className="main-heading hover:cursor-pointer uppercase"
          >
            {item.title}
          </h2>
          {showSection === item.name && item.component}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
