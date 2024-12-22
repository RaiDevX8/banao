import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";

const FilterSection = () => {
  return (
    <div className="border-bottom bg-white">
      {/* For Mid and Large Devices */}
      <div className="d-none d-md-flex align-items-center justify-content-between px-3 py-2">
        {/* Filter Options */}
        <div className="d-flex gap-3 align-items-center">
          <span className="fw-bold">All Posts(32)</span>
          <button className="btn btn-link text-muted px-0">Article</button>
          <button className="btn btn-link text-muted px-0">Event</button>
          <button className="btn btn-link text-muted px-0">Education</button>
          <button className="btn btn-link text-muted px-0">Job</button>
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
              <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Job</Dropdown.Item>
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
          <span className="fw-bold">Posts(368)</span>
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
              <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Education</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Job</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
