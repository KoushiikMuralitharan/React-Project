import React from "react";
import { Parallax } from "react-parallax";
import parallax1 from "../images/parallax1.jpg";
import "./parallax.css";
import { useNavigate } from "react-router-dom";
const Parallaxing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="App">
        <Parallax strength={300} bgImage={parallax1} bgClassName="mass">
          <div className="content">
            <div>
              <p className="h1 tcolor">It is essential to have good tools, but it is also essential than the tools should be used in the right way.</p>
            </div>
            <div className="mas">
            <button class="bttn" onClick={() => navigate("/menu")}>BUY NOW</button>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};
export default Parallaxing;
