const buttonNumber = document.getElementById('button-number');
const buttonName = document.getElementById('button-name');
const rootTag = document.getElementById('root');

buttonNumber.addEventListener('click', fNumber);
buttonName.addEventListener('click', fName);

function fNumber() {
    const n1 = Math.floor(Math.random() * 100); //random number between 0-99
    const n2 = Math.floor(Math.random() * 100); //random number between 0-99
    rootTag.innerHTML = `Your lucky numbers are ${n1} and ${n2}!`;
}

function fName() {
    rootTag.innerHTML= 'My name is Austin!';
}