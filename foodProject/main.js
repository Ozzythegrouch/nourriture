
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

//for actual page content

const itemsList = document.getElementById('items-list'); //caching the ul element
const searchInput = document.getElementById('search');

const itemsContent = [
    'African',
    'American',
    'British',
    'Cajun',
    'Caribbean',
    'Chinese',
    'Eastern European',
    'European',
    'French',
    'German',
    'Greek',
    'Indian',
    'Irish',
    'Italian',
    'Japanese',
    'Jewish',
    'Korean',
    'Latin American',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'Southern',
    'Spanish',
    'Thai',
    'Vietnamese'
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon"); 


inputBox.addEventListener('keyup', e => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            linkTag.click();
        }
        emptyArray = itemsContent.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
});

//clicking on suggestion puts it in input box
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

//shows suggestions when start to type
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

