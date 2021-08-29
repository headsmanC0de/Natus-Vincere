// ? I'm watching you P.S: Button

const btnLisener = document.querySelector('button')

btnLisener.addEventListener('click', () => newItems('I was pressed!'));

btnLisener.addEventListener('mouseover', () => newItems('Mouse on me!'));

btnLisener.addEventListener('mouseout', () => newItems('Mouse is not on me!'));

btnLisener.addEventListener('dblclick', () => newItems('This is a double click dude!'));

const watchList = document.getElementById('watch__list');

let newItems = function(text) {
    const item = document.createElement('li');
    item.textContent = text;
    watchList.appendChild(item);
};








