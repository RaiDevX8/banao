import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import SignupModal from "../signup/SignupModal";
import MobileSignupModal from "../signup/MobileSignupModal";

const FloatingActionButton = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  return (
    <div
      className="d-block"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <button
        type="button"
        className="btn btn-danger rounded-circle shadow-lg"
        style={{
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={openSignupModal}
      >
        <FaPen style={{ fontSize: "24px", color: "#fff" }} />
      </button>

      {showSignupModal && (
        <>
          {/* Render for Large Screens */}
          <SignupModal onClose={closeSignupModal} />
          {/* Render for Mobile */}
          <MobileSignupModal onClose={closeSignupModal} />
        </>
      )}
    </div>
  );
};

export default FloatingActionButton;
