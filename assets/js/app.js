//? Feedback initialization
const appels = document.getElementById("appeals");
//? Send Button initialization
const sendButton = document.querySelector(".btn-send");

//! Function for creating the structure of the feedback item
let createAppeal = function (text) {
  const article = document.createElement("article");
  article.setAttribute("class", "feedback");

  appels.appendChild(article);

  const textDiv = document.createElement("div");
  const feedbackText = document.createElement("p");
  textDiv.appendChild(feedbackText);
  feedbackText.textContent = text;

  const dateAuthor = document.createElement("div");
  dateAuthor.setAttribute("class", "date__author");
  article.appendChild(textDiv);
  article.appendChild(dateAuthor);

  const date = document.createElement("div");
  date.setAttribute("class", "date");

  // Time Setting
  const newDate = new Date();
  date.textContent = newDate.toLocaleString();

  const author = document.createElement("div");
  author.setAttribute("class", "author");
  dateAuthor.appendChild(date);
  dateAuthor.appendChild(author);

  const authorLink = document.createElement("a");
  author.appendChild(authorLink);
  authorLink.setAttribute("href", "https://headsmanc0de.com/");
  authorLink.setAttribute("target", "_blank");
  authorLink.textContent = "headsmanc0de";
};

//? Send feedback

function addAppeal() {
  const textArea = document.getElementById("feedback-text");
  const textAreaText = textArea.value;
  createAppeal(textAreaText);
  textArea.value = "";
}

sendButton.addEventListener("click", addAppeal);