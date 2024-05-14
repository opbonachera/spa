export const Error = () =>{
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('button');

    button.textContent = 'Return to home';
    title.textContent = '404 | Page not found';

    section.append(title, button);
    return section;
}