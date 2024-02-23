const displayVisits = document.querySelector(".visits");

let visitCount = Number(window.localStorage.getItem("visitCount-ls")) || 0;

if (visitCount !== 0) {
	displayVisits.textContent = visitCount;
}
else {
	displayVisits.textContent = `This is your first visit!`;
}

visitCount++;

localStorage.setItem("visitCount-ls", visitCount);