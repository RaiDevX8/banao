import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const MobileSignupModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };
  return (
    <div
      className="modal d-flex show d-block d-lg-none "
      tabIndex="-1"
      style={{
        background: "rgba(0, 0, 0, 0.5)",

        bottom: "0",
        left: "0",
        width: "100%",
        height: "auto",
      }}
    >
      <div
        className="modal-dialog"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%", // Ensures full width
          borderRadius: "12px 12px 0 0",
          background: "#fff",
          margin: "0", // Removes default margins
          padding: "0", // Removes padding
        }}
      >
        <div className="modal-content">
          {/* Close Button */}
          <div
            className="position-absolute top-0 end-0 m-2"
            style={{ cursor: "pointer", zIndex: 1055 }}
            onClick={handleClose}
          >
            <button
              type="button"
              className="rounded-circle p-1"
              style={{
                width: "2rem",
                height: "2rem",
                fontSize: "1.5rem",
                border: "none",
                color: "black",
                background: "#f5f5f5",
              }}
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-body p-4">
            <h5 className="text-center mb-3">Create Account</h5>
            <form>
              <div className="row">
                <div className="col-6 d-flex w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary rounded-pill w-100 mb-3"
              >
                Create Account
              </button>
            </form>

            <div className="text-center">
              <button className="btn btn-outline-secondary w-100 mb-2">
                <FaFacebook className="me-2" />
                Sign up with Facebook
              </button>
              <button className="btn btn-outline-secondary w-100">
                <FaGoogle className="me-2" />
                Sign up with Google
              </button>
            </div>
            <Link to={"/m-login"}>Sign up</Link>

            <p className="text-center" style={{ fontSize: "0.8rem" }}>
              By signing up, you agree to our{" "}
              <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSignupModal;
