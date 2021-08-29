// Feedback Area
const appels = document.getElementById("appeals");

// Send Button
const sendButton = document.querySelector(".btn-send");

sendButton.addEventListener('click', function() {
    const article = document.createElement("article");
article.setAttribute("class", "feedback");

appels.appendChild(article);

const textDiv = document.createElement("div");
const feedbackText = document.createElement("p");
textDiv.appendChild(feedbackText);

const dateAuthor = document.createElement("div");
dateAuthor.setAttribute('class','date__author')
article.appendChild(textDiv);
article.appendChild(dateAuthor);


const date = document.createElement("div");
date.setAttribute('class', 'date')

// Time Setting
const newDate = new Date();
date.textContent = newDate.toLocaleString()

const author = document.createElement("div");
author.setAttribute('class', 'author')
dateAuthor.appendChild(date)
dateAuthor.appendChild(author)


const authorLink = document.createElement("a");
author.appendChild(authorLink);
authorLink.setAttribute("href", "https://headsmanc0de.com/");
authorLink.setAttribute("target", "_blank");

authorLink.textContent = "headsmanc0de";

// Text area
const textArea = document.getElementById("feedback-text");
const textAreaText = textArea.value;

feedbackText.textContent = textAreaText;

})

