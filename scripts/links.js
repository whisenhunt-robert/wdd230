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
        let lessonLinks = lesson.links;

        // Create new HTML elements for each lesson
        const listItem = document.createElement('li');
        const anchorLesson = document.createElement('span'); // Change 'a' to 'span'
        anchorLesson.textContent = `Week ${lessonNum}: `;
        listItem.appendChild(anchorLesson);

        lessonLinks.forEach(function(link, index) {
            let url = link.url;
            let title = link.title;

            // Create new HTML elements for each link
            const anchorLink = document.createElement('a');
            anchorLink.href = url;
            anchorLink.textContent = title;

            // Append the link anchor element to the list item
            listItem.appendChild(anchorLink);

            // Add a separator between links (except for the first link)
            if (index < lessonLinks.length - 1) {
                listItem.appendChild(document.createTextNode(' | '));
            }
        });

        // Append the list item to the output div
        output.appendChild(listItem);
    });
}

getLinks();
