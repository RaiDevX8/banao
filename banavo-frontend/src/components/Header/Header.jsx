import React from "react";
import Logo from "./image.png";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="border bg-light">
      {/* For Mid and Large Devices */}
      <div className="d-none d-md-flex flex-wrap align-items-center justify-content-around px-3 py-2">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="mb-2 mb-md-0"
          style={{ width: "150px" }}
        />

        {/* Search Bar */}
        <div
          className="gap-1 bg-white d-flex align-items-center border rounded-pill px-2 mx-auto mx-md-0"
          style={{ width: "100%", maxWidth: "360px" }}
        >
          <GoSearch className="position-relative" />
          <input
            type="text"
            className="border-0 flex-grow-1 form-control shadow-none text-center"
            placeholder="Search for your favorite groups in ATG"
            style={{
              fontSize: "0.9rem",
              fontFamily: "sans-serif",
            }}
          />
        </div>

        {/* Account Section */}
        <div className="d-flex align-items-center mt-2 mt-md-0">
          <span className="text-muted me-1">Create account.</span>
          <a href="#" className="text-primary me-1">
            It’s free!
          </a>
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>

      {/* For Mobile Devices */}
      <div className="d-md-none" style={{ height: "24px" }}></div>
    </div>
  );
};

export default Header;
