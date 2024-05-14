export const About = () =>{
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const p = document.createElement('p');
    const container = document.createElement('div');
    
    // styles
    section.classList.add("about-container");
    title.classList.add("fw-bolder", "w-50");
    p.classList.add("w-50", "fs-5");
    container.classList.add('content-container');

    title.textContent = "Sobre el proyecto";
    p.textContent = "Este es un proyecto realizado por Ornella Bonachera.\
    Se trata de una Single Page Application realizada en JS Vanilla en la cual\
    se pueden encontrar distintas recetas tomadas de la API falsa dummyJSON.\
    Sus interfaces están en inglés por conveniencia de la API elegida.\
    ";

    container.append(title, p);
    section.append(container);
    return section;
}
