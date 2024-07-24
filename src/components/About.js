export const About = () =>{
    const section = document.createElement('main');
    const title = document.createElement('h1');
    const p = document.createElement('p');
    const container = document.createElement('div');
    
    // styles
    section.classList.add('about-container');
    // title.classList.add('m-auto', 'w-50');
    // p.classList.add('w-50', 'fs-5', 'm-auto', 'lead', 'fs-3');
    // container.classList.add('content-container');

    title.textContent = 'About the project';
    p.textContent = 'This is a project created by Ornella Bonachera.\
    It is a Single Page Application made with Vanilla JS in which\
    you can find various recipes taken from the dummyJSON fake API.';


    container.append(title, p);
    section.append(container);
    return section;
}
