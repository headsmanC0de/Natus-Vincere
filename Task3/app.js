
//! Declaring a button and events for it

const btnLisener = document.querySelector('button')
//* Events
btnLisener.addEventListener('click', (e) => newItems('I was pressed!', e));

btnLisener.addEventListener('mouseover', (e) => newItems('Mouse on me!', e));

btnLisener.addEventListener('mouseout', (e) => newItems('Mouse is not on me!', e));

btnLisener.addEventListener('dblclick', (e) => newItems('This is a double click dude!', e));

const watchList = document.getElementById('watch__list');

//? Function for displaying events in the list

let newItems = function(text, e) {
    const item = document.createElement('li');
    item.textContent = text;
    watchList.prepend(item);
    if(watchList.children.length >= 10) {
        watchList.removeChild(watchList.lastChild)
    }

    //* Li CSS Style 
    if(e.type == 'click') {
        item.setAttribute('class', 'green')
    } else if (e.type == 'mouseover'){
        item.setAttribute('class', 'yellow')
    } else if (e.type == 'mouseout'){
        item.setAttribute('class', 'red')
    } else if (e.type == 'dblclick'){
        item.setAttribute('class', 'dblclick')
    } 
    
    
};

// ? I'm watching you P.S: Button









