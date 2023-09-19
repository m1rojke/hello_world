const text = document.getElementById("text");
const title = document.querySelector(".title");
const page = document.querySelector(".page");

let intervalId;

function setter() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000);
  }
}

function offSetter() {
  clearInterval(intervalId);
  intervalId = null;
}

function changeColor() {
  if (title.style.backgroundColor == "" && text.style.color == "") {
    title.style.backgroundColor = "black";
    text.style.color = "white";
  } else if (
    title.style.backgroundColor == "black" &&
    text.style.color == "white"
  ) {
    title.style.backgroundColor = "white";
    text.style.color = "black";
  } else if (
    title.style.backgroundColor == "white" &&
    text.style.color == "black"
  ) {
    title.style.backgroundColor = "black";
    text.style.color = "white";
  }
}

text.addEventListener("mouseover", () => {
  if(!intervalId) {
    setter();
  } else if (intervalId) {
    offSetter();
  }
});
