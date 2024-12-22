import React from "react";
import { FiArrowLeft } from "react-icons/fi"; // Importing the left arrow icon from react-icons
import Post from "./image.png";
import Post2 from "./post2.png";

const HeroSection = () => {
  return (
    <section
      className="position-relative"
      style={{ minHeight: "250px", minWidth: "360px"     }}
    >
      {/* Image for desktop */}
      <div className="position-relative">
        <img
          src={Post}
          alt="Hero Banner"
          className="d-none d-lg-block w-100 img-fluid h-100"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay
          }}
        ></div>
      </div>

      {/* Image for mobile */}
      <div className="position-relative">
        <img
          src={Post2}
          alt="Hero Banner Mobile"
          className="d-block d-lg-none w-100 img-fluid h-100"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay
          }}
        ></div>
      </div>

      {/* Text and Information */}
      <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="fw-bold">Computer Engineering</h1>
        <p className="d-none d-sm-block">
          142,765 Computer Engineers follow this
        </p>
      </div>

      {/* Arrow and Join Buttons on Mobile */}
      <div className="d-flex d-md-none justify-content-between align-items-center position-absolute w-100 top-0 mt-3 px-3">
        {/* Arrow Button (Left side) */}
        <button className="left-arrow-btn btn btn-link">
          <FiArrowLeft size={24} color="white" /> {/* Using react-icons */}
        </button>

        {/* Join Button (Right side) */}
        <button className="border btn btn-link text-white join-btn">
          Join
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
