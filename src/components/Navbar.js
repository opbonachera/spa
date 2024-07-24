const listItems = [
        { 'label': 'Home', 'href' : '/'},
        { 'label': 'About', 'href' : '/about'},
        { 'label': 'Recipes', 'href' : '/recipes'},
        { 'label': 'Log in', 'href' : '/login'},
        { 'label': 'Contact', 'href' : '/contact'},
    ]
export const Navbar = () =>{
    const section = document.createElement('nav');
    const list = document.createElement('div');
    const pageTitle = document.createElement('h5')
    pageTitle.textContent = 'Recipes.js'

    list.classList.add('list-wrapper');
    pageTitle.classList.add('nav-title');

    for(const item of listItems){
    
        let link = document.createElement('p');

        link.classList.add('anchor-element', 'list-element', 'hover-effect');
        link.setAttribute('href', item.href);
        link.textContent = item.label.toUpperCase();
        
        list.appendChild(link);
    }

    section.append(pageTitle,list);
    return section;
}

