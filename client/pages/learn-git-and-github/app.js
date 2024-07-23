document.addEventListener("DOMContentLoaded", function () {
  const gits = [
    {
      question: "Git & GitHub Tutorial",
      source: "freeCodeCamp",
      url: "https://www.freecodecamp.org/news/git-and-github-for-beginners/"
    },
    {
      question: "Intro to Git & GitHub for Beginners",
      source: "HubSpot",
      url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners"
    },
    {
      question: "GitHub & Git Tutorial",
      source: "DataCamp",
      url: "https://www.datacamp.com/tutorial/github-and-git-tutorial-for-beginners"
    },
    {
      question: "An Ultimate Guide to Git & GitHub",
      source: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/ultimate-guide-git-github/"
    },
    {
      question: "Intro to GitHub for Version Control",
      source: "Coding Club",
      url: "https://ourcodingclub.github.io/tutorials/git/"
    },
    {
      question: "GitHub & Git Tutorial for Beginners",
      source: "Analytics Vidhya",
      url: "https://www.analyticsvidhya.com/blog/2021/09/git-and-github-tutorial-for-beginners/"
    },
    {
      question: "How to use GitHub",
      source: "Edureka",
      url: "https://www.edureka.co/blog/how-to-use-github"
    },
    {
      question: "GitHub - Get Started",
      source: "GitHub",
      url: "https://docs.github.com/en/get-started/start-your-journey/hello-world"
    }
  ];

  function createGitItem(value) {
    return `
        <div class="box1">
          <ul>
            <li>
              <p class="question">${value.question}</p>
              <span class="source"><i class="italic">By ${value.source} -</i></span>
              <button class="btn"><a href="${value.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a></button>
            </li>
          </ul>
        </div>
      `;
  }

  const dynamicGitsContainer = document.getElementById("dynamic-git");

  gits.forEach(value => {
    dynamicGitsContainer.innerHTML += createGitItem(value);
  });
});  