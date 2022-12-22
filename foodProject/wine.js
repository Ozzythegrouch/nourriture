const wineButton = document.querySelector('.wine-button')
const foodForm = document.querySelector('.food-form')
const foodItem = document.querySelector(".food-item")


const handleSubmit = e => {
      e.preventDefault();
      const data = new FormData(e.target);
      const stringified = stringifyFormData(data);
      console.log(stringified);
      const userInput = JSON.parse(stringified)
      getWine(userInput)
    };
    
    foodForm.addEventListener('submit', handleSubmit);
  
  function stringifyFormData(fd) {
      const data = {};
      for (let key of fd.keys()) {
        if (data[key]) {
          // if the key already exists, we need an array of multiple values
          data[key] = fd.getAll(key);
        } else {
          data[key] = fd.get(key);
        }
      }
      return JSON.stringify(data, null, 4);
    }

const getWine = async (formData) => {

    const foodChoice = formData.meat
    const pricePoint = formData.price


    const apiData = await fetch(`https://api.spoonacular.com/food/wine/pairing?apiKey=88bec9af2b6b41518546ff72b954b601&food=${foodChoice}&price=${pricePoint}`)
    const jsonData = await apiData.json()
    const wineData = jsonData

    foodItem.innerText = ''

    const pairedWines = wineData.pairedWines
    const pairingText = wineData.pairingText

    for(wData of wineData.productMatches){
        const wineChoice = wData.title
        const wineDescription = wData.description
        const winePrice = wData.price
        const wineImage = wData.imageUrl
        const wineLink = wData.link

        const wineInfo = document.createElement('div')
            wineInfo.className = 'wineContainer'
            wineInfo.innerHTML = 
            `<div class="wine-container-choice">
                <div class="wine-container-choice-title">
                    <img src="${wineImage}" />
                    <h4>${wineChoice}</h4>
                </div> 
                <div class="wine-container-choice-description">   
                    <h4>${wineDescription}</h4>
                    <h5>${winePrice}</h5>
                    <a href="${wineLink} target="_blank"><h5>Buy this Wine</h5></a>
                </div>
                <div class="wine-container-initial">
                    <h4>${pairingText}</h4>
                </div>    
             </div>     
            `
        foodItem.append(wineInfo)
    }
}

wineButton.addEventListener('click', getWine)
