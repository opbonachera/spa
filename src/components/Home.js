export const Home = () =>{

    const section = document.createElement('section');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');

    //  Styles
    section.classList.add('w-100', 'bg-light', 'd-flex', 'h-75','pt-5', 'flex-column', 'align-items-center', 'justify-content-center');
    button.classList.add('w-50', 'home-button', 'bg-primary');
    img.classList.add('image', 'w-50');
    title.classList.add('title');
    paragraph.classList.add('lead');
    
    title.textContent = 'Recipe.js';
    paragraph.textContent = 'Browse among hundreds of recipes in our web!';
    button.textContent = 'Get started';
    button.classList.add('anchor-element');
    button.setAttribute('href', '/recipes');

    img.setAttribute('src', 'https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg');
    
    section.append(title, paragraph, img, button);
    
    return section;
}