import React from "react";
import PropTypes from "prop-types";
import {
  FiMoreHorizontal,
  FiEye,
  FiShare2,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const EventCard = ({
  postImg,
  title,
  category,
  date,
  location,
  buttonText,
  authorImg,
  author,
  views,
}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px", margin: "auto" }}>
      {postImg && (
        <div style={{ height: "200px", overflow: "hidden" }}>
          <img
            src={postImg}
            className="card-img-top"
            alt="Event Background"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
      )}
      <div className="card-body">
        {/* Category */}
        <h6 className="card-title text-muted mb-2">{category}</h6>

        <div className="d-flex justify-content-between align-items-center">
          {/* Title */}
          <h5 className="card-title fw-bold">{title}</h5>
          {/* Three-Dot Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" className="text-dark rounded">
              <FiMoreHorizontal size={24} />{" "}
              {/* The icon wrapped inside the toggle */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/create/article">
                Article
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/create/event">
                Event
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/create/job">
                Job
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>   
        </div>

        {/* Date and Location */}
        <div className="text-muted mb-2 d-flex gap-3">
          <div className="d-flex align-items-center mb-1">
            <FiCalendar className="me-2" /> {date}
          </div>
          <div className="d-flex align-items-center">
            <FiMapPin className="me-2" /> {location}
          </div>
        </div>

        {/* Button */}
        {buttonText === "Visit Website" && (
          <button
            className="btn border  w-100 mb-3"
            style={{ height: "40px", color: "red" }}
          >
            {buttonText}
          </button>
        )}
        {buttonText === "Apply on Timesjobs" && (
          <button
            className="btn border  w-100 mb-3"
            style={{ height: "40px", color: "green", fontWeight: "500" }}
          >
            {buttonText}
          </button>
        )}

        {/* Footer */}
        <div className="d-flex align-items-center justify-content-between">
          {/* Author Details */}
          <div className="d-flex align-items-center">
            <img
              src={authorImg}
              alt="Author"
              className="rounded-circle me-2"
              style={{ height: "40px", width: "40px" }}
            />
            <span className="fw-bold">{author}</span>
          </div>

          {/* Actions */}
          <div className="d-flex align-items-center">
            {/* Views */}
            <span className="text-muted me-3 d-flex align-items-center">
              <FiEye className="me-1" /> {views} views
            </span>

            {/* Share Button */}
            <FiShare2
              className="ms-3"
              style={{ cursor: "pointer" }}
              title="Share"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  postImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
};

export default EventCard;
