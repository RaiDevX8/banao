import React from "react";
import ArticleCard from "../components/PostCard/ArticleCard";
import JobCard from "../components/PostCard/JobCard";
import RecommendedGroups from "../components/RecommendedGroups/RecommendedGroups";
import { useParams } from "react-router-dom";
import Post1 from "../assets/image1.png";
import Post2 from "../assets/image2.png";
import Post3 from "../assets/image3.png";

import dp1 from "../assets/dp1.png";
import dp2 from "../assets/dp2.png";
import dp3 from "../assets/dp3.png";

import FloatingActionButton from "../components/FloatingActionButton/FloadtingActionButton";
import SignupModal from "../components/signup/SignupModal";
import LoginModal from "../components/Login/LoginModel";
import MobileLoginModel from "../components/Login/MobileLoginModel"
const Home = () => {
  const { category } = useParams();

  const articles = [
    {
      id: 1,
      postImg: Post1,
      authorImg: dp1,
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      subtitle: "Famous Brands and Fonts",
      description:
        "I’ve worked in UX for the better part of a decade. From now on, I plan to reimagine...",
      author: "Sarthak Kamra",
      views: "1.4k",
    },
  ];

  const education = [
    {
      id: 1,
      postImg: Post2,
      authorImg: dp2,
      title:
        "Tax Benefits for Investment under National Pension Scheme Launched by Government",
      subtitle:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
      description:
        "An article about the future of education and technology's role in it.",
      author: "Sarah West",
      views: "3.0k",
    },
  ];

  const jobs = [
    {
      id: 1,
      type: "jobs",
      image: "assets/job_image.png",
      eventType: "💼 Job Posting",
      title: "Front-End Developer Role at TechCorp",
      date: "Apply by: 15 Oct, 2018",
      location: "Remote, Worldwide",
      buttonText: "Apply on Timesjobs",
      website: "https://techcorp.com/careers",
      profileImage: dp3,
      username: "TechCorp HR",
      views: "2.1k",
    },
  ];

  const events = [
    {
      id: 1,
      type: "events",
      image: Post3,
      eventType: "🗓️ Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      date: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      website: "https://example.com",
      buttonText: "Visit Website",
      profileImage: dp3,
      username: "Ronal Jones",
      views: "1.4k",
    },
  ];

  const renderContent = () => {
    if (!category) {
      // Show all content when no category is provided
      return (
        <>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              postImg={article.postImg}
              authorImg={article.authorImg}
              title={article.title}
              subtitle={article.subtitle}
              description={article.description}
              author={article.author}
              views={article.views}
            />
          ))}
          {education.map((edu) => (
            <ArticleCard
              key={edu.id}
              postImg={edu.postImg}
              authorImg={edu.authorImg}
              title={edu.title}
              subtitle={edu.subtitle}
              description={edu.description}
              author={edu.author}
              views={edu.views}
            />
          ))}
          {events.map((event) => (
            <JobCard
              key={event.id}
              postImg={event.image}
              eventType={event.eventType}
              title={event.title}
              buttonText={event.buttonText}
              date={event.date}
              location={event.location}
              website={event.website}
              authorImg={event.profileImage}
              author={event.username}
              views={event.views}
            />
          ))}
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              image={job.image}
              eventType={job.eventType}
              title={job.title}
              date={job.date}
              buttonText={job.buttonText}
              location={job.location}
              website={job.website}
              authorImg={job.profileImage}
              author={job.username}
              views={job.views}
            />
          ))}
        </>
      );
    }

    switch (category) {
      case "articles":
        return articles.map((article) => (
          <ArticleCard
            key={article.id}
            postImg={article.postImg}
            authorImg={article.authorImg}
            title={article.title}
            subtitle={article.subtitle}
            description={article.description}
            author={article.author}
            views={article.views}
          />
        ));
      case "education":
        return education.map((edu) => (
          <ArticleCard
            key={edu.id}
            postImg={edu.postImg}
            authorImg={edu.authorImg}
            title={edu.title}
            subtitle={edu.subtitle}
            description={edu.description}
            author={edu.author}
            views={edu.views}
          />
        ));
      case "events":
        return events.map((event) => (
          <JobCard
            key={event.id}
            postImg={event.image}
            eventType={event.eventType}
            title={event.title}
            buttonText={event.buttonText}
            date={event.date}
            location={event.location}
            website={event.website}
            authorImg={event.profileImage}
            author={event.username}
            views={event.views}
          />
        ));
      case "jobs":
        return jobs.map((job) => (
          <JobCard
            key={job.id}
            image={job.image}
            eventType={job.eventType}
            title={job.title}
            date={job.date}
            buttonText={job.buttonText}
            location={job.location}
            website={job.website}
            authorImg={job.profileImage}
            author={job.username}
            views={job.views}
          />
        ));
      default:
        return <p>Select a valid category from the URL.</p>;
    }
  };

  return (
    <div className="container d-flex p-4 w-100">
{/* <MobileLoginModel/> */}
      <div className="w-100">{renderContent()}</div>
      <div>
        <RecommendedGroups />
      </div>
      <FloatingActionButton/>
    </div>
  );
};

export default Home;
