
const userInput = document.querySelector('.userInput');
const message = document.querySelector('.message');
const myButton = document.querySelector('.myButton');
const content = document.querySelector('#contentContainer')
const splashScreen = document.querySelector('.splash-screen')
const messageFade = document.querySelector('#messageFade')
const nameComp = document.querySelector('.nameComponent')

function contentFade() {
    setTimeout(()=>{
        content.classList.add('contentContainerToFade')
        content.classList.add('show')
    }, 5000)
}



myButton.onclick = function() {
    messageFade.classList.add('messageFade')
    nameComp.remove('nameComponent')
    message.innerHTML= `Welcome, ${userInput.value}! Let's get cooking...`
    contentFade()
}

