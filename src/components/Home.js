export const Home = () =>{

    const section = document.createElement('section');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');

    //  Styles
    section.classList.add("home-container");
    button.classList.add('home-button');
    img.classList.add("image");
    title.classList.add("title");
    paragraph.classList.add("paragraph");
    
    title.textContent = 'Recipe.js';
    paragraph.textContent = 'Browse among hundreds of recipes in our web!';
    button.textContent = 'Get started';
    
    img.setAttribute('src', "https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg");
    
    section.append(title, paragraph, img, button,);
    
    return section;
}