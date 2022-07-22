
const userInput = document.querySelector('.userInput');
const message = document.querySelector('.message');
const myButton = document.querySelector('.myButton');



myButton.onclick = function() {
    message.innerHTML= `Welcome to siteName, ${userInput.value}!`
}
