import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { GoSearch } from "react-icons/go";
import SignupModal from "../signup/SignupModal";
import { Link } from "react-router-dom";
import dp3 from "../../assets/dp3.png";

const Header = ({ isSignedUp }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const closeSignupModal = () => setShowSignupModal(false);

  // Function to handle successful signup
  const handleSignupSuccess = (name) => {
    closeSignupModal(); // Close the signup modal
  };

  return (
    <div className="border bg-light fixed-top">
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
          {isSignedUp ? (
            <div className="d-flex align-items-center">
              <img
                src={dp3} 
                alt="User"
                className="rounded-circle me-2"
                style={{ width: "34px", height: "34px" }}
              />
              <span className="text-muted me-2">charan</span>
              <i className="bi bi-caret-down-fill"></i>
            </div>
          ) : (
            <>
              <span className="text-muted me-1">Create account.</span>
              <Link to={"/signup"}>SignUp</Link>
              <i className="bi bi-caret-down-fill"></i>
            </>
          )}
        </div>
      </div>

      <div className="d-md-none" style={{ height: "24px" }}></div>
      {showSignupModal && (
        <SignupModal
          onClose={closeSignupModal}
          onSignupSuccess={handleSignupSuccess}
        />
      )}
    </div>
  );
};

export default Header;
