console.log("JS Linked");

let headerText = document.getElementById("header");
console.log(headerText);

headerText.innerText = "0";

let buttonOne = document.getElementById("buttonOne");
console.log(buttonOne);

buttonOne.addEventListener("click", changes)
function changes() {
    buttonOne.classList.add("differentbackground"); // you should be adding the color to the header not the btn
    headerText.innerText = "1";
}