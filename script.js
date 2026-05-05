// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";
// container.appendChild(content);

// const paragraph = document.createElement("p");
// paragraph.textContent = "Hey I'm red!";
// paragraph.style.color = "red";
// container.appendChild(paragraph);

// const subTitle = document.createElement("h3");
// subTitle.textContent = "Hey a blue h3!";
// subTitle.style.color = "blue";
// container.appendChild(subTitle);

// const specialContent = document.createElement("div");
// specialContent.style.backgroundColor = "pink";
// specialContent.style.border = "solid";
// container.appendChild(specialContent);

// const mainTitle = document.createElement("h1");
// specialContent.appendChild(mainTitle);
// mainTitle.textContent = "I'm in a div";

// const anotherParagraph = document.createElement("p");
// anotherParagraph.textContent = "ME TOO!";
// specialContent.appendChild(anotherParagraph);

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello");
//     alert("World");
// });

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);