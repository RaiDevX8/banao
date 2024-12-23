import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiMap } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { FaThumbsUp } from "react-icons/fa";

const RecommendedGroups = () => {
  const initialGroups = [
    {
      name: "Leisure",
      image: "https://via.placeholder.com/40",
      followed: false,
    },
    {
      name: "Activism",
      image: "https://via.placeholder.com/40",
      followed: false,
    },
    { name: "MBA", image: "https://via.placeholder.com/40", followed: false },
    {
      name: "Philosophy",
      image: "https://via.placeholder.com/40",
      followed: false,
    },
  ];

  const [groups, setGroups] = useState(initialGroups);

  const toggleFollow = (index) => {
    setGroups((prevGroups) =>
      prevGroups.map((group, i) =>
        i === index ? { ...group, followed: !group.followed } : group
      )
    );
  };

  return (
    <div
      className="d-none d-lg-block container mt-4 p-4"
      style={{
        backgroundColor: "#fff",
        borderRadius: "8px",
      }}
    >
      {/* Geo Pointer Icon and Input */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group">
          <span className="input-group-text bg-white border-0">
            <BiMap size={20} />
          </span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Enter your location"
            style={{ backgroundColor: "white" }}
            aria-label="Enter your location"
          />
        </div>
        <button className="btn-close ms-3" aria-label="Close"></button>
      </div>

      {/* Warning Message */}
      <p className="text-muted small d-flex align-items-center mb-4">
        <BiInfoCircle className="me-2" size={18} />
        Your location will help us serve better and extend a personalised
        experience.
      </p>

      {/* Recommended Groups Section */}
      <div className="d-flex align-items-center mb-3">
        <FaThumbsUp size={20} className="me-2" />
        <h6 className="m-0 text-uppercase" style={{ fontWeight: "bold" }}>
          Recommended Groups
        </h6>
      </div>
      <div className="list-group">
        {groups.map((group, index) => (
          <div
            key={index}
            className="list-group-item d-flex align-items-center px-0"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <img
              src={group.image}
              alt={group.name}
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span className="flex-grow-1">{group.name}</span>
            <button
              className="btn btn-sm rounded-pill"
              style={{
                backgroundColor: group.followed ? "black" : "#edeef0",
                color: group.followed ? "white" : "black",
                borderColor: group.followed ? "black" : "#edeef0",
              }}
              onClick={() => toggleFollow(index)}
            >
              {group.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      {/* See More Link */}
      <div className="text-end mt-3">
        <a href="#see-more" className="text-primary small">
          See More...
        </a>
      </div>
    </div>
  );
};

export default RecommendedGroups;
