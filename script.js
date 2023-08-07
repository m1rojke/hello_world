const text = document.getElementById("text");
const title = document.querySelector(".title");

text.addEventListener("click", () => {
  if (title.style.backgroundColor == "" && text.style.color == "") {
    title.style.backgroundColor = "black";
    text.style.color = "white";
  } else if (title.style.backgroundColor == "black" && text.style.color == "white") {
    title.style.backgroundColor = "white";
    text.style.color = "black";
  } else if (title.style.backgroundColor == "white" && text.style.color == "black") {
    title.style.backgroundColor = "black";
    text.style.color = "white";
  }
});
