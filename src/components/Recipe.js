export const Recipe = () =>{
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');

    button.textContent = 'login';
    title.textContent = 'Welcome to my project';

    section.append(title, button);
    return section;
}

