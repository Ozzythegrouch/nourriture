const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const analyzedinstructions = document.querySelector('.analyzedinstructions')

const getRandomFood = async () => {
  const apiData = await fetch(`https://api.spoonacular.com/recipes/random?number=1&apiKey=88bec9af2b6b41518546ff72b954b601`)
  const jsonData = await apiData.json() //json data variable the whole thing that is returned from spoonacular
  const recipes = jsonData.recipes  // taking recipe key which brings back an array of objects
  const randomRecipe=recipes[0]; // index into array of objects at index 0, will give you first and only reccipe
  return randomRecipe;} // returning it

const clickhandler= async() => {  //  fancy function that will be called everytimr that event happens
    const recipe= await getRandomFood() // invoke /calling the function / goes from line 13 to line 5 and returns recipe
    const title = recipe.title   // declaring title
    const image= recipe.image     // declaring image 
    const ready = recipe.readyInMinutes //declaring timing 
    const servings= recipe.servings // declaring servings
    const summary = recipe.summary // declaring summary
    const instructions = recipe.instructions // declaring instructions
    // const number= recipe.number
    // const steps = recipe.steps

   const steps= recipe.analyzedInstructions.forEach(instruction => {
    const div=document.createElement('div');
      instruction.steps.forEach(step => { // go to instruction and then steps
        const stepNumber= document.createElement('div');
        const stepInstructions = document.createElement('p');
        const ul= document.createElement ('ul');
        stepNumber.innerText= step.number;
        stepInstructions.innerText= step.step
        div.append(stepNumber);
        div.append(stepInstructions);
        step.ingredients.forEach(ingredient => {
          const li= document.createElement('li')
          li.innerText = ingredient.name
          ul.append(li);
        })
        div.append(ul);
      })
      analyzedinstructions.append(div);
    })
    
  // document.getElementsByClassName('class') // array with one div
  const array = document.getElementsByClassName('class'); // named the array to access "class div"
  array[0].innerHTML= title 
  const picture = document.getElementById('recipeimage') // grabbing image 
  picture.setAttribute('src', image ); //grabbing image
  const mins = document.getElementsByClassName('ready');  // grabbing readyinminutes
  mins[0].innerHTML = ready
  const people = document.getElementsByClassName('servings'); // grabbing servings
  people[0].innerHTML= servings
  const bio = document.getElementsByClassName('summary');  // grabbing summary
  bio[0].innerHTML= summary
  const details = document.getElementsByClassName('instructions'); // grabbing instructions
  details[0].innerHTML =instructions

}
get_meal_btn.addEventListener('click',clickhandler); // listen for click events



