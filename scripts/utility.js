

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function generateARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    // generate random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    return alphabetString[index];
}

function changeBackgroundById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundById(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const textValue = element.innerText;
    const intValue = parseInt(textValue);
    return intValue;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}