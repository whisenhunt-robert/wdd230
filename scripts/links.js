const baseURL = "https://whisenhunt-robert.github.io/wdd230/";
const linksURL = "https://whisenhunt-robert.github.io/wdd230/data/links.json";
const output = document.getElementById("output");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    let allLessons = data.lessons;
    const line = document.createElement('li');
    const pizza = ''
    allLessons.forEach(function(allLessons) {
        let lessonNum = allLessons.lesson;
        let lessonUrl = allLessons.links;
        lessonUrl.forEach(function(lessonsUrl){
            let url = lessonsUrl.url;
            let title = lessonsUrl.title;
            // Create new HTML elements for each link
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.textContent = lessonNum;
            anchor.href = url;
            anchor.textContent = title;
            listItem.innerHTML = `lesson ${lessonNum} assignment <a href="${url}">${title}</a>`;
            // Append the anchor element to the list item
            // listItem.appendChild(anchor);

            // Append the list item to the output div
            output.appendChild(listItem);
        })
    })
}

getLinks();
displayLinks();