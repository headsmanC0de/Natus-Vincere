// ? I'm watching you P.S: Button

const btnLisener = document.querySelector('button')
btnLisener.addEventListener('click', () => {
    console.log('I was pressed!');
});

btnLisener.addEventListener('mouseover', () => {
    console.log('Mouse on me!');
});

btnLisener.addEventListener('mouseout', () => {
    console.log('Mouse is not on me!');
});

btnLisener.addEventListener('dblclick', () => {
    console.log('This is a double click dude!');
});