
const url = 'https://dummyjson.com/recipes?limit=6&skip=10&select=name,image,instructions,servings,mealType';


export const RecipeList = () =>{
    const section = document.createElement('section');
    const div = document.createElement('div');
    const title = document.createElement('h1');
    // Styles

    section.classList.add('bg-light','container', 'd-flex', 'w-100');
    title.classList.add('w-100', 'mt-3');

    title.textContent = 'List of recipes'
    fetch(url)
    .then(res => res.json())
    .then(recipes=>{
        for(const recipe of recipes.recipes){
          const rec = Card(recipe.name, recipe.image, recipe.instructions, recipe.servings, recipe.mealType);
          div.append(rec);
    }
    }) 

    div.append(title);
    div.classList.add('row', 'text-center', 'd-flex', 'align-items-center', 'justify-content-center');
    
    section.append(div);
    return section;
}

export const Card = ( name, imgSrc, instructions, servings, mealType ) =>{
    const card = document.createElement('div');
    const title = document.createElement('h5');
    const img = document.createElement('p');
    const desc = document.createElement('p');
    const instList = document.createElement('ul');
    const serv = document.createElement('p');
    const type = document.createElement('p');

    card.classList.add('card', 'col-5', 'my-3', 'mx-1', 'p-1', 'w-100');
    title.classList.add('card-title', 'fs-5', 'mt-3');
    desc.classList.add('card-text');
    serv.classList.add('serv');
    
    title.textContent = name; 
    img.setAttribute('src', imgSrc);
    serv.textContent = `${servings} servings.`;
    type.textContent = mealType.join(' | ');
    
    instList.classList.add('list-unstyled');

    instructions.forEach((i) => {
        const instItem = document.createElement('li'); 
        instItem.textContent = i;
        instList.append(instItem);
    });

    
    card.append(title, img, desc, instList, serv, type);
    
    return card;
}