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
    allLessons.forEach(function(lesson) {
        let lessonNum = lesson.lesson;
        let lessonUrl = lesson.links;
        lessonUrl.forEach(function(lessonsUrl) {
            let url = lessonsUrl.url;
            let title = lessonsUrl.title;

            // Create new HTML elements for each link
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.textContent = title;

            // Append the anchor element to the list item
            listItem.appendChild(anchor);

            // Append the list item to the output div
            output.appendChild(listItem);

            listItem.innerHTML = `lesson ${lessonNum}: <a href="${url}">${title}</a>`;
        });
    });
}

getLinks();
