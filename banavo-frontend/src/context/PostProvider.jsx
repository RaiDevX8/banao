import React, { createContext, useState } from "react";
import Post1 from "../assets/image1.png";
import Post2 from "../assets/image2.png";
import Post3 from "../assets/image3.png";

import dp1 from "../assets/dp1.png";
import dp2 from "../assets/dp2.png";
import dp3 from "../assets/dp3.png";
export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState({
    articles: [
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
    ],
    education: [   {
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
        },],
    jobs: [
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
    ],
    events: [
      // Your events data
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
    ],
  });

  const allPosts = [
    ...posts.articles,
    ...posts.education,
    ...posts.jobs,
    ...posts.events,
  ];

  return (
    <PostsContext.Provider value={{ posts, setPosts, allPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
