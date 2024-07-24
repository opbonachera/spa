
const url = 'https://dummyjson.com/recipes?limit=6&skip=10&select=name,image,description,instructions,servings,mealType';


export const RecipeList = () =>{
    const section = document.createElement('main');
    const listContainer = document.createElement('div');
    const title = document.createElement('h1');
    // Styles

    listContainer.classList.add('recipe-list-container');
    title.classList.add('list-title');

    title.textContent = 'List of Our Recipes';

    fetch(url)
    .then(res => res.json())
    .then(recipes=>{
        for(const recipe of recipes.recipes){
          const rec = Card(recipe.name, recipe.image, recipe.instructions, recipe.servings, recipe.mealType);
          listContainer.append(rec);
    }
    }) 
    
    section.append(title, listContainer);
    return section;
}

export const Card = ( name, imgSrc, instructions, servings, mealType ) =>{
    const card = document.createElement('div');
    const title = document.createElement('h5');
    const img = document.createElement('img');
    const desc = document.createElement('p');
    const instList = document.createElement('ul');
    const serv = document.createElement('p');
    const type = document.createElement('p');

    img.classList.add('recipe-image');
    card.classList.add('card-container');
    type.classList.add('meal-category');

    title.textContent = name; 
    img.setAttribute('src', imgSrc);
    serv.textContent = `Serves: ${servings}`;
    type.textContent = mealType.join(' | ');
    

    // for (let i = 0; i < 3 && i < instructions.length; i++) {
    //     const instItem = document.createElement('li');
    //     instItem.textContent = instructions[i];
    //     instList.append(instItem);
    // }
    
    card.append(img, title, desc, instList, serv, type);
    
    return card;
}