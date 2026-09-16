const test = document.createElement("p");
test.textContent = "testjs";
const existingTestText = document.querySelector(".existing");
existingTestText.appendChild(test);
