let projects = [
  {
    name: "Principal Component Analysis",
    description:
      "Displays categorically the various components and features of how a data set can be analysed and interpreted.",
    technologies: ["Python", "Pandas", "Numpy"],
    github: "https://github.com/UCHENNA07/A-Data-Analysis-Project-With-Pandas-Numpy-And-Principal-Component-Analysis",
    preview: null,
    image: "",
  },
  {
    name: "Energy Data Analytics ",
    description:
      "This is a practical analysis and visualization project about energy consumption by different countries over a certain period of time. ",
    technologies: [],
    github: "https://github.com/UCHENNA07/A-Python-Data-Visualization-Project-On-Energy-Consumption",
    preview: null,
    image: "",
  },
  {
    name: "Time Series Analysis",
    description:
      "This project lays emphasis on time series forecasting, checking stationaries of a time series, making time series stationary.",
    technologies: [],
    github: "https://github.com/UCHENNA07/Time-Series-Analysis-with-Python",
    preview: null,
    image: "",
  },
  {
    name: "Application Programming Interface ",
    description:
      "This project solely relies on utilizing application programming interface to get data from a website.",
    technologies: [],
    github: "https://github.com/UCHENNA07/Python-Data-Extraction-And-Analysis-From-The-Web-Utilizing-API",
    preview: null,
    image: "",
  },
  {
    name: "Data Visualization",
    description:
      "Utilized Power BI to create an informative dashboard for Superstore report.",
    technologies: [],
    github: "https://github.com/UCHENNA07/Data-Visualization-Utilizing-Power-BI",
    preview: null,
    image: "",
  },
  {
    name: "Data Visualization",
    description:
      "Visualization of Walmart data using Microsoft Power BI",
    technologies: [],
    github: "https://github.com/UCHENNA07/Data-Transformation-and-Visualization-Utilizing-Microsoft-Power-BI",
    preview: null,
    image: "",
  },
  {
    name: "Data analysis and Visualization",
    description: "Data cleaning, analysis and visualization with Microsoft Excel.",
    technologies: [],
    github: "https://github.com/UCHENNA07/Data-Analysis-and-Visualization-Utilizing-Microsoft-Excel",
    preview: null,
    image: "",
  },
  {
    name: "SQL Project ",
    description: "Using Data Manipulation Language (DML), Data Control Language (DCL) and Data Definition Language (DDL) for the purpose of accessing all information in the database.",
    technologies: [],
    github: "https://github.com/UCHENNA07/SQL-Project",
    preview: null,
    image: "",
  },
];

AOS.init();

let projectContent = document.querySelector(".all-projects");
var fragment = document.createDocumentFragment();

projects.forEach((project) => {
  let div = document.createElement("div");
  div.setAttribute("data-aos", "fade-up")
  div.innerHTML = `
  <div class="projects__card">
                        <div class="projects__card--content">
                            <div class="projects__card--content--header">
                                <h2>${project.name}</h2>
                            </div>
                            <div class="projects__card--content--about">
                                <p>${project.description}</p>
                            </div>
                            <div class="projects__card--content--tech">
                              ${project.technologies
                                .map(
                                  (tool) => `
                                <span>${tool}</span>
                              `
                                )
                                .join("")}
                            </div>
                            <div class="projects__card--content--links">
                              ${
                                project.github
                                  ? `<a href="${project.github}" target="_blank"><span class="fa fa-github"></span></a>`
                                  : ""
                              }
                              ${
                                project.preview
                                  ? `<a href="${project.preview}" target="_blank"><span class="fa fa-link"></span></a>`
                                  : ""
                              }
                            </div>
                        </div>
                        <div class="projects__card--image">
                        </div>
                    </div>
  `;

  fragment.appendChild(div);
});

projectContent.appendChild(fragment);

let logo = document.querySelector("#logo");

logo.addEventListener("click", () => {
  window.location.href = "/";
});

gsap.from("nav", { duration: 1, y: -300, opacity: 0 });
// gsap.from("#header-image", {
//   duration: 2,
//   x: 300,
//   opacity: 0,
//   scale: 0.5,
//   ease: "bounce",
// });

const cursor = document.querySelector(".custom-cursor");

document.onmousemove = (e) => {
  cursor.style.transform = `translate(${e.pageX + 10}px, ${e.pageY + 10}px)`;
};
