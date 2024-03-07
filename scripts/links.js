const baseURL = "https://whisenhunt-robert.github.io/wdd230/";
const linksURL = "https://whisenhunt-robert.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
    console.log(response, data);
}



getLinks();