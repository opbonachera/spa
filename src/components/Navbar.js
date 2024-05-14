export const Navbar = () =>{
    const section = document.createElement('nav');
    const list = document.createElement('ul');
    

    // Styles
    section.classList.add("navbar");
    list.classList.add("nav-list");

    const listItems = [
        { 'label': 'ABout', 'href' : '/about'},
        { 'label': 'Home', 'href' : '/home'},
        { 'label': 'Recipes', 'href' : '/recipes'},
        { 'label': 'Log in', 'href' : '/'},
        { 'label': 'Contact', 'href' : '/'},
    ]

    for(const item of listItems){
        const listElement = document.createElement('li');
        
        listElement.classList.add("list-item");

        let link = document.createElement("p");
        link.classList.add("anchor-element", "hover-effect");
        link.setAttribute("href", item.href);
        link.textContent = item.label.toUpperCase();

        listElement.appendChild(link);
        list.appendChild(listElement);
    }

    section.appendChild(list);
    return section;
}

