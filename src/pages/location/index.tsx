import React, { useState } from "react";
import { ktm, netherland, portugal } from "../../assests";

const Location: React.FC = () => {
  return (
    <div className="location-container">
      <h2 className="location-heading">
        Javra Software B.V. Is based in 3 locations
      </h2>
      <div>
        <div>
          <img
            className="responsive_img"
            src={netherland}
            alt="netherland"
            loading="lazy"
          />
          <h3 className="text-center text-sm mt-1 mb-2">Culemborg, Netherlands (HQ)</h3>
        </div>
        <div>
          <div>
            <img
              className="responsive_img"
              src={portugal}
              alt="portugal"
              loading="lazy"
            />
            <h3 className="text-center text-sm mt-1 mb-2">Lisbon, Portugal (Nearshore)</h3>
          </div>
        </div>
        <div>
          <div>
            <img
              className="responsive_img"
              src={ktm}
              alt="kathmandu"
              loading="lazy"
            />
            <h3 className="text-center text-sm mt-1 mb-2">Kathmandu, Nepal (Offshore)</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
