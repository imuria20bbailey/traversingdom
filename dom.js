//manipulation by Id
const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "blue";

//manipulating by tagname
const paragraphs = document.querySelectorAll("p")
paragraphs.forEach(paragraph => {
    paragraph.style.color = "maroon"
    paragraph.style.fontStyle = "italic"
    paragraph.style.fontWeight = "bold"
});

//Manipulating by class
const listItem = document.querySelectorAll("li");
listItem.forEach(item => {
    item.classList.add("highlight");
});

//manipulating by targeting element
const targetElement = document.getElementById("targetElement");
targetElement.classList.remove("active");

//manipulating by parent and child element
const listPerson = document.querySelector("li");

const parentElement = listPerson.parentElement;

const childElements = listPerson.childNodes;

console.log("Parent Element:", parentElement);

console.log("Child Elements:", childElements);

