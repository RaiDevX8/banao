import React from "react";
import PropTypes from "prop-types";
import { FiMoreHorizontal, FiShare2, FiEye } from "react-icons/fi"; // Importing React Icons
import "bootstrap/dist/css/bootstrap.min.css"; // Only for styling
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ArticleCard = ({
  postImg,
  authorImg,
  title,
  subtitle,
  description,
  author,
  views,
}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px", margin: "auto" }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={postImg}
          className="card-img-top"
          alt="Article Background"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div className="card-body">
        <h6 className="card-title text-muted mb-2">
          <span role="img" aria-label="pen">
            ✍
          </span>{" "}
          {}
        </h6>
        <div className="d-flex">
          {" "}
          <h5 className="card-title fw-bold">{title}</h5>{" "}
          {/* Three-Dot Dropdown Menu */}
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="text-dark rounded"
              
            >
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
        <p className="card-text text-muted" style={{ fontSize: "0.82em" }}>
          {subtitle}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              src={authorImg}
              alt="Author"
              className="rounded-circle me-2"
              style={{ height: "40px", width: "40px" }}
            />
            <span className="fw-bold">{author}</span>
          </div>
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

ArticleCard.propTypes = {
  postImg: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
};

export default ArticleCard;
