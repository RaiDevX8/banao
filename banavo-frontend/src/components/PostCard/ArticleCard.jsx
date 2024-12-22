import React from "react";
import Post from './img.jpg'
import Person from './person.jpg'
const ArticleCard = () => {
  return (
    <div className="container my-4">
      <div className="card w-100">
        <img
          src={Post} // Replace with your image URL
          className="card-img-top"
          alt="Article"
          style={{ objectFit: "cover", height: "200px" }} // Ensures the image fits well
        />
        <div className="card-body">
          <h5 className="card-title">✍️ Article</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h6>
          <p className="card-text">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to reimagine...
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={Person} // Replace with author image
                alt="Author"
                className="rounded-circle img-fluid"
                style={{ width: "30px", height: "30px", marginRight: "10px",objectFit:'cover' }}
              />
              <span>Sarthak Kamra</span>
            </div>
            <div>
              <span>👁️‍🗨️ 1.4k views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
