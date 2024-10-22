/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Holo-Tech.jpeg";

const imageAltText = "Holographic display of digital devices showing connectivity and technology.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Online Portal Quiz",
    description:
      "Collaborating on a beginner-friendly guide for an online programming language quiz portal, highlighting web development tools and techniques",
    url: "https://github.com/sourabh1642004/OPQ-with-Django.git",
  },
  {
    title: "Opinion Mining For Comment Sentiment Analysis",
    description:
      "Co-developed a Django web app for sentiment analysis, using Bootstrap UI, Chart.js for visualizations, and SQLite. Worked on both ML and front-end to display sentiment results in bar charts.",
    url: "https://github.com/sourabh1642004/Opinion-Mining-For-Comment-Sentiment-Analysis.git",
  },
  {
    title: "AI Music Web App",
    description:
      "Developed a music production app with a Django backend for generating lyrics and a Flutter frontend for user interaction, enabling personalized and iterative music creation.",
    url: "https://github.com/omagr2004/Ai-Music-Web-App.git",
  },
  {
    title: "Blog App",
    description:
      "Developed a beginner-level blog app using React, featuring post creation, editing, and deletion. The app includes a responsive design and integrates seamlessly with APIs.",
    url: "https://github.com/omagr2004/Blog-App.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
