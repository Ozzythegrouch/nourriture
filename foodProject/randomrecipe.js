const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const analyzedinstructions = document.querySelector('.analyzedinstructions');
const ingredients = document.querySelector('.ingredients');

const getRandomFood = async () => {
  const apiData = await fetch(
    `https://api.spoonacular.com/recipes/random?number=1&apiKey=88bec9af2b6b41518546ff72b954b601`
  );
  const jsonData = await apiData.json(); //json data variable the whole thing that is returned from spoonacular
  const recipes = jsonData.recipes; // taking recipe key which brings back an array of objects
  const randomRecipe = recipes[0]; // index into array of objects at index 0, will give you first and only reccipe
  return randomRecipe;
}; // returning it

let h2;
let ul; // declare ul 
const clickhandler = async () => {
  //  fancy function that will be called everytimr that event happens
  if (ul) {
    ul.remove()
  }
  
  if (h2) {
    h2.remove()
  }
  analyzedinstructions.innerHTML=""; // return empty instructions from the previous value 
  const recipe = await getRandomFood(); // invoke /calling the function / goes from line 13 to line 5 and returns recipe
  const title = recipe.title; // declaring title
  const image = recipe.image; // declaring image
  const ready = recipe.readyInMinutes; //declaring timing
  const servings = recipe.servings; // declaring servings
  const summary = recipe.summary; // declaring summary
  const instructions = recipe.instructions; // declaring instructions
  const vegetarian = recipe.vegetarian;
  const vegan = recipe.vegan;
  const glutenFree = recipe.glutenFree;
  const dairyFree = recipe.dairyFree;
  // const number= recipe.number
  // const steps = recipe.steps

  addTitle('Instructions', analyzedinstructions);
  const steps = recipe.analyzedInstructions.forEach((instruction) => {
    const div = document.createElement('tag');
    instruction.steps.forEach((step) => {// go to instruction and then steps
      
      const stepNumber = document.createElement('tag');
      const stepInstructions = document.createElement('p');
      const ul = document.createElement('ul');
      stepNumber.innerHTML = "<span class='stepStyle'> "+step.number+"</span> "+"<p class='stepstyletext'>"+step.step+"</p>";
      stepInstructions.innerText = step.step;
      div.append(stepNumber );
    //  div.append(stepInstructions);
      step.ingredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.innerText = ingredient.name;
        ul.append(li);
      });
      div.append(ul);
    });

    analyzedinstructions.append(div);
  });


  if (h2) {
    h2.remove()
  }
  // CODE TO GET INGREDIENTS
  h2 = addTitle('Ingredients', ingredients);
  ul = document.createElement('ul');
  ul.classList.add('ingredients'); // attribute to style
  recipe.extendedIngredients.forEach((ingredient) => {
    const li = document.createElement('li');
    const ingredientname = document.createElement('p');
    const ingredientamount = document.createElement('p');
    const ingredientunit = document.createElement('p');
    ingredientname.innerText = ingredient.name;
    ingredientamount.innerText = ingredient.amount;
    ingredientunit.innerText = ingredient.unit;
    li.append(ingredientamount);
    li.append(ingredientunit);
    li.append(ingredientname);
    ul.append(li);
  });

  ingredients.append(ul);

  // document.getElementsByClassName('class') // array with one div
  const array = document.getElementsByClassName('class'); // named the array to access "class div"
  array[0].innerHTML = title;
  const picture = document.getElementById('recipeimage'); // grabbing image
  picture.setAttribute('src', image); //grabbing image
  const mins = document.getElementsByClassName('ready'); // grabbing readyinminutes
  mins[0].innerHTML =`${ready} minutes to be ready`
  const people = document.getElementsByClassName('servings'); // grabbing servings
  if (servings> 1) {
    people[0].innerHTML = `${servings} servings` 
  } else{
    people[0].innerHTML = `${servings} serving` 
  };  
  const veggie = document.getElementsByClassName('vegetarian');
  if(veggie) {
    veggie[0].innerHTML = 'Vegetarian:Yes'};
  const vegandiv = document.getElementsByClassName('vegan');
  if(vegandiv) {
    vegandiv[0].innerHTML = 'Vegan:Yes'};
  const glutenFreediv = document.getElementsByClassName('glutenFree');
  if(glutenFreediv) {
    glutenFreediv[0].innerHTML = 'Gluten free:Yes'};
  const dairyFreediv = document.getElementsByClassName('dairyFree');
  if(dairyFreediv) {
    dairyFreediv[0].innerHTML = 'Dairy free:Yes'};
  const bio = document.getElementsByClassName('summary'); // grabbing summary
  bio[0].innerHTML = summary;
  const details = document.getElementsByClassName('instructions'); // grabbing instructions
  details[0].innerHTML = instructions;
};
get_meal_btn.addEventListener('click', clickhandler); // listen for click events

function addTitle(title, element) {
  const h2 = document.createElement('h2');
  h2.innerText = title;
  element.append(h2);
  return h2;
}

