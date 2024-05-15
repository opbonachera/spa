export const Error = () =>{
    const section = document.createElement('section');
    const title = document.createElement('h2');

    section.classList.add('w-100', 'd-flex', 'h-75', 'flex-column', 'align-items-center', 'justify-content-center');

   
    title.textContent = '404 | Page not found';
    
    section.append(title);
    return section;
}