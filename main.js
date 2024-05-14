import { routes } from "./src/services/routes";
import { Navbar } from "./src/components/Navbar.js";

import { Error as NotFound } from './src/components/Error.js';

const d = document;
const root = d.getElementById("root");

const navigate = (routeSegment) =>{
    const route = routes.find((r)=> r.path === routeSegment);
    let component; 
    
    if(route){
        component = route.component();      
        updateWindowHistory(route.path);  
    }else{
        component = NotFound();
    } 

    renderComponent(component);
}

const renderComponent = (component) =>{
    
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    
    root.append(Navbar(), component);
}

const updateWindowHistory = (path) =>{
    window.history.pushState(
        {}, path, window.location.origin + path,
      );
}

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches(".anchor-element")) {
        return;
    }
    e.preventDefault();
    navigate(e.target.getAttribute('href'));
    
});

navigate(window.location.pathname);