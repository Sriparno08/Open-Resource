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
        <div class='box1'>
          <div class='question'>${value.question}</div>
          <div class='source'><i class="italic">By ${value.source}</i></div>
          <button class="btn"><a href="${value.url}" target="_blank">Visit Site<i class="bi bi-box-arrow-up-right"></i></a></button>
        </div>
      `;
  }

  const dynamicGitsContainer = document.getElementById("dynamic-git");

  gits.forEach(value => {
    dynamicGitsContainer.innerHTML += createGitItem(value);
  });

  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    console.log('themeToggle clicked')
    // Toggle Font Awesome icons

    const moonIcon = themeToggle.querySelector(".fa-moon");
    const sunIcon = themeToggle.querySelector(".fa-sun");

    if (body.classList.contains("dark-theme")) {
      moonIcon.style.display = "inline";
      sunIcon.style.display = "none";
      localStorage.setItem("theme", "dark");
    } else {
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline";
      localStorage.setItem("theme", "light");
    }

  });

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }

});  