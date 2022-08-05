const convertBtn = document.querySelector('.btn'),
conversionResult = document.querySelector('.conversion')

const convertFood = async () => {
    // const convertData = await fetch(`https://api.spoonacular.com/recipes/convert?apiKey=aa9611e5d4dd4a37b20f359bea400080&ingredientName=${ingredientName}&sourceAmount=${sourceAmount}&sourceUnit=${sourceUnit}&targetUnit=${targetUnit}`)
    const convertData = await fetch ('https://api.spoonacular.com/recipes/convert?apiKey=aa9611e5d4dd4a37b20f359bea400080&ingredientName=sugar&sourceAmount=2.5&sourceUnit=cups&targetUnit=grams')
    const result = await convertData.json();

    const ingredientName = result.ingredientName
    const sourceUnit = result.sourceUnit
    const targetName = result.targetName
    const targetUnit = result.targetUnit
    conversionResult.innerText = targetUnit

}

convertBtn.addEventListener('on click',convertFood)

// Ingredient conversion
// Client search for Ingredient
// Drop down for units?
// (automatically) calculate?