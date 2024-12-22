import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaThumbsUp } from "react-icons/fa"; // For icons

const RecommendedGroups = () => {
  const groups = [
    { id: 1, name: "Leisure", image: "https://via.placeholder.com/50" },
    { id: 2, name: "Activism", image: "https://via.placeholder.com/50" },
    { id: 3, name: "MBA", image: "https://via.placeholder.com/50" },
    { id: 4, name: "Philosophy", image: "https://via.placeholder.com/50" },
  ];

  return (
    <div
      className="container my-4 p-3 border rounded shadow-sm"
      style={{ maxWidth: "400px" }}
    >
      {/* Location Input */}
      <div className="d-flex align-items-center mb-3">
        <FaMapMarkerAlt className="me-2" />
        <input
          type="text"
          className="form-control"
          placeholder="Enter your location"
          style={{ flex: 1 }}
        />
        <button className="btn btn-link text-dark ms-2">✖</button>
      </div>
      <p className="text-muted small">
        <span role="img" aria-label="info">
          ℹ️
        </span>{" "}
        Your location will help us serve better and extend a personalized
        experience.
      </p>

      {/* Recommended Groups Section */}
      <div className="mt-3">
        <h6 className="d-flex align-items-center">
          <FaThumbsUp className="me-2" /> RECOMMENDED GROUPS
        </h6>
        {groups.map((group) => (
          <div key={group.id} className="d-flex align-items-center my-2">
            <img
              src={group.image}
              alt={group.name}
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <span className="flex-grow-1">{group.name}</span>
            <button className="btn btn-outline-primary btn-sm">Follow</button>
          </div>
        ))}
        <div className="text-end mt-2">
          <button className="btn btn-link text-primary p-0">See More...</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedGroups;
