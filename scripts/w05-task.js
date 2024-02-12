/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const article = document.createElement("article");
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
      article.appendChild(h3);
      article.appendChild(img);
      templesElement.appendChild(article);
    });
  };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"); // Replace with the actual URL
      templeList = await response.json();
      displayTemples(templeList);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  

/* reset Function */
// Step 6: Function: reset()
const reset = () => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
  
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;

      case "alphabetical":
        const sortedTemples = temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
        displayTemples(sortedTemples);
        break;
    }
  };

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterTemples(templeList);
  });

  // Call getTemples() to fetch and display initial data
getTemples();