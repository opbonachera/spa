export const Home = () =>{
    // Creation of html elements
    // Sections
    const main = document.createElement('main');
    const firstSection = document.createElement('section');


    const gridContainer = document.createElement('div')
    const firstCol = document.createElement('div');
    const secondCol = document.createElement('div');
    const title = document.createElement('h1');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');
    
    // Adding classes for styling
    firstSection.classList.add('home-container');
    gridContainer.classList.add('grid-container');
    firstCol.classList.add('grid-item');
    secondCol.classList.add('grid-item');
    img.classList.add('img-home');
    button.classList.add('home-button');

    //  Attributes and text content
    img.setAttribute('src', 'https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg');
    title.textContent = 'Discover Delicious Recipes';
    paragraph.textContent=  'Our website offers a wide variety of delicious recipes for every occasion. From quick and easy weeknight meals to elaborate gourmet dishes, we\'ve got you covered';
    button.textContent = 'Explore Recipes';

    // Appending children
    main.appendChild(firstSection);
    firstSection.append(gridContainer);
    firstCol.append(img);
    secondCol.append(title,paragraph,button);
    gridContainer.append(firstCol, secondCol);
    
    return main;
}