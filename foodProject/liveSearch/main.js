// const itemsList = document.getElementById('items-list'); //caching the ul element
// const searchInput = document.getElementById('search');

// const renderItemsList = items => {
//     itemsList.innerHTML = ' ';
//     items.forEach(item => { //items defined in data.js
//     const li = document.createElement('li');
//     li.innerText = item;
//     itemsList.append(li); //actually changes the html
//     });
// };

// renderItemsList(itemsContent);

// searchInput.addEventListener('keyup', e => { //actually captures the event 'e'
//     const value = e.target.value;
//     const filteredItems = itemsContent.filter(item => item.toLowerCase().search(value) !== -1);
//     renderItemsList(filteredItems);
// });
// //creating a new array filteredItems from old array items; 

// getting all required elements
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
