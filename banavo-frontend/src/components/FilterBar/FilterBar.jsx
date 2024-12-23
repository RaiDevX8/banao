import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PostsContext } from "../../context/PostProvider";
import  { useContext } from "react";

const FilterSection = () => {
      const { allPosts } = useContext(PostsContext);

  return (
    <div className="bg-white">
      {/* For Mid and Large Devices */}
      <div className="d-none d-md-flex border-bottom  align-items-center justify-content-around px-3 py-2">
        {/* Filter Options */}
        <div className="d-flex gap-3 ">
          <Link
            to="/"
            className="btn btn-link text-muted px-0 "
            style={{ textDecoration: "none" }}
          >
            <span className="fw-bold ">All Posts({allPosts.length})</span>
          </Link>
          <Link
            to="/articles"
            className="btn btn-link text-muted px-0"
            style={{ textDecoration: "none" }}
          >
            Article
          </Link>
          <Link
            to="/events"
            className="btn btn-link text-muted px-0"
            style={{ textDecoration: "none" }}
          >
            Event
          </Link>
          <Link
            to="/education"
            className="btn btn-link text-muted px-0"
            style={{ textDecoration: "none" }}
          >
            Education
          </Link>
          <Link
            to="/jobs"
            className="btn btn-link text-muted px-0"
            style={{ textDecoration: "none" }}
          >
            Job
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-3">
          {/* Write a Post Dropdown */}
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="text-dark border rounded"
              id="dropdown-basic"
            >
              Write a Post
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

          {/* Join Group Button */}
          <Button variant="primary" className="d-flex align-items-center gap-2">
            <FaUserPlus />
            Join Group
          </Button>
        </div>
      </div>

      {/* For Mobile and Small Devices */}
      <div className="d-md-none d-flex align-items-center justify-content-between px-3 py-2">
        {/* Left Section */}
        <div className="d-flex align-items-center">
          <span className="fw-bold">Posts({allPosts.length})</span>
        </div>

        {/* Right Section */}
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              className="text-dark border rounded d-flex align-items-center"
              id="dropdown-basic"
            >
              All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/articles">
                Article
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/events">
                Event
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/education">
                Education
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/jobs">
                Job
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
