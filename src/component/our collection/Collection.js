import React from "react";
import "./style.css";

import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";

const Collection = () => {
  return (
    <div className="text-center collection">
      <div className="lg:px-28 px-4">
        <h3>Our Collection</h3>
        <p>
          Discover our elegant and unique fine jewelry collections,
          <br className="md:block hidden" /> ranging from classic diamond studs
          to stylish pendants <br /> and dazzling bracelets.
        </p>

        <div className="flex card-body justify-between">
          <div className="flex-1 card sm:m-2 m-1">
            <div>
              <img src={c1} alt="" />
            </div>
            <div className="py-4">
              <h5>Wedding Ring</h5>
              <p>Every Diamond in our collection</p>
            </div>
          </div>
          <div className="flex-1 card sm:m-2 m-1">
            <div>
              <img src={c2} alt="" />
            </div>
            <div className="py-4">
              <h5>Engagement Rings</h5>
              <p>Every Diamond in our collection</p>
            </div>
          </div>
          <div className="flex-1 card sm:m-2 m-1">
            <div>
              <img src={c3} alt="" />
            </div>
            <div className="py-4">
              <h5> Fine Jewelry</h5>
              <p>Every Diamond in our collection</p>
            </div>
          </div>
          <div className="flex-1 card sm:m-2 m-1">
            <div>
              <img src={c4} alt="" />
            </div>
            <div className="py-4">
              <h5>Latest Rings</h5>
              <p>Every Diamond in our collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
};

export default Collection;
