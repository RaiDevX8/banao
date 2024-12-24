import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Side from "./image.png";

const SignupModal = ({ setIsSignedUp }) => {
  // Removed onClose prop
  const [name, setName] = useState("charan");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleSignup = () => {
    if (password === confirmPassword) {
      setIsSignedUp(true); // Set the signup state to true
      navigate("/"); // Redirect to the homepage or other page
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div
      className="modal show d-none d-lg-block d-md-block" // Visible only on large devices
      tabIndex="-1"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "736px" }}
      >
        <div className="modal-content position-relative">
          {/* Close Button */}
          <div
            className="position-absolute top-0 end-0"
            style={{ cursor: "pointer", zIndex: 1055 }}
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
              }}
              onClick={handleClose}
            >
              <AiOutlineClose />
            </button>
          </div>

          <div
            className="modal-header border-0 d-none d-md-block"
            style={{ background: "#effff4" }}
          >
            <h5
              className="w-100 text-center m-0"
              style={{ fontSize: "0.7rem" }}
            >
              Let’s learn, share & inspire each other with our passion for
              computer engineering. Sign up now ✌️
            </h5>
          </div>

          <div className="modal-body" style={{ padding: "1rem" }}>
            <div className="row h-100">
              <div className="col-md-6 d-flex flex-column">
                <div>
                  <h5 className="p-2">Create Account</h5>
                </div>
                <form>
                  <div className="row">
                    <div className="col-6 d-flex w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill w-100"
                    onClick={handleSignup}
                  >
                    Create Account
                  </button>
                </form>

                <div className="text-center mt-3">
                  <button className="btn btn-outline-secondary w-100 mb-2">
                    <FaFacebook className="me-2" />
                    Sign up with Facebook
                  </button>
                  <button className="btn btn-outline-secondary w-100">
                    <FaGoogle className="me-2" />
                    Sign up with Google
                  </button>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                <p className="text-center mb-3" style={{ fontSize: "0.9rem" }}>
                  Already have an account? <Link to={"/login"}>Login</Link>
                </p>
                <img
                  src={Side}
                  alt="Signup Illustration"
                  className="img-fluid"
                  style={{
                    maxWidth: "320px",
                    height: "320px",
                    objectFit: "contain",
                  }}
                />
                <p className="text-center mt-3" style={{ fontSize: "0.8rem" }}>
                  By signing up, you agree to our{" "}
                  <a
                    href="/"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/"
                    style={{ color: "#007bff", textDecoration: "none" }}
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
