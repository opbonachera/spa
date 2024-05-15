const listItems = [
        { 'label': 'About', 'href' : '/about'},
        { 'label': 'Home', 'href' : '/'},
        { 'label': 'Recipes', 'href' : '/recipes'},
        { 'label': 'Log in', 'href' : '/login'},
        { 'label': 'Contact', 'href' : '/contact'},
    ]
export const Navbar = () =>{
    const section = document.createElement('div');
    const list = document.createElement('div');
    
    section.classList.add('bg-primary', 'text-secondary');
    list.classList.add('w-50','h-25','fs-5','pt-3','m-auto', 'd-flex', 'align-items-center', 'justify-content-between');
    
    for(const item of listItems){
    
        let link = document.createElement('p');
        link.classList.add('anchor-element', 'hover-effect', 'text-light' ,'lead');
        link.setAttribute('href', item.href);
        link.textContent = item.label.toUpperCase();
        
        list.appendChild(link);
    }

    section.appendChild(list);
    return section;
}

