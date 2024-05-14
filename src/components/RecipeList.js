
const url = 'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image,instructions,servings,mealType';


export const RecipeList = () =>{
    const section = document.createElement('section');
    const div = document.createElement('div');
    
    // Styles
    section.classList.add('recipes-container');
    div.classList.add('card-container');
    fetch(url)
    .then(res => res.json())
    .then(recipes=>{
        for(const recipe of recipes.recipes){
          const r = Card(recipe.name, recipe.image, recipe.instructions, recipe.servings, recipe.mealType);
          div.append(r);
    }
    }) 
    
    section.append(div);
    return section;
}

export const Card = ( name, imgSrc, instructions, servings, mealType ) =>{
    const card = document.createElement('div');
    const title = document.createElement('h5');
    const img = document.createElement('p');
    const desc = document.createElement('p');
    const inst = document.createElement('p');
    const serv = document.createElement('p');
    const type = document.createElement('p');

    card.classList.add('card');
    title.classList.add('card-title');
    desc.classList.add('card-text');
    
    title.textContent = name; 
    img.setAttribute('src', imgSrc);
    inst.textContent = instructions;
    serv.textContent = servings;
    type.textContent = mealType;

    card.append(title, img, desc, inst, serv, type);
    
    return card;
}