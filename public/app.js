const buttonNumber = document.getElementById('button-number');
const buttonName = document.getElementById('button-name');

buttonNumber.addEventListener('click', fNumber);
buttonName.addEventListener('click', fName);

function fNumber() {
    console.log('Clicked!')
}

function fName() {
    console.log('Also clicked!')
}