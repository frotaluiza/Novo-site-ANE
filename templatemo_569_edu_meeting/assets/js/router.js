const routes = {
    404: {
        template: "/templates/404.html",
        title: "404",
        description: "Page not found",
    },
    "/": {
        template: "index.html",
        title: "Home",
        description: "This is the home page",
    },
    contact: {
        template: "/templates/contact.html",
        title: "Contact Us",
        description: "This is the contact page",
    },
    missao: {
        template:"src/institucional/missao-e-valores.html",
        title: "Missão e Valores"
    },
    //INSTITUCIONAL
    institucional: {
        template:"src/institucional/institucional.html",
        title: "Institucional"
    },
    historia: {
        template: "src/institucional/historia.html",
        title: "História",
       // description: "This is the about page",
    },
    estatuto: {
        template: "src/institucional/estatuto.html",
        title: "Estatuto",
    },
    regimentoInterno: {
        template: "src/institucional/regimento-interno.html",
        title: "Regimento Interno" 
    },
    diretoriaExecutiva: {
        template: "src/institucional/diretoria-executiva.html",
        title:" Diretoria Executiva",
    },
    conselhos: {
        template:"src/institucional/conselhos.html",
        title: "Conselhos"
    },
    comissoes: {
        template:"src/institucional/comissoes.html",
        title: "Comissões",
    },
    galeriaPresidentes: {
        template:"src/institucional/galeria-de-presidentes.html",
        title: "Galeria de Presidentes",
    },
    premiosHonrarias: {
        template:"src/institucional/premios-e-honrarias.html",
        title: "Premios e Honrarias",
    },
    quemSomos: {
        template:"src/institucional/quem-somos.html",
        title: "Quem Somos",
    },
    //MEMBROS
    correspondentes: {
        template:"src/membros/correspondentes.html",
        title: "Correspondentes",
    },
    titulares: {
        template:"src/membros/titulares.html",
        title: "Titulares",
    },
    fundadores: {
        template:"src/membros/fundadores.html",
        title: "Fundadores",
    },
    titularesInMemorian: {
        template:"src/membros/titulares-in-memorian",
        title: "Titulares In Memorian",
    },
    fundadoresPioneiros: {
        template:"src/membros/fundadores-pioneiros",
        title: " Fundadores Pioneiros",
    },
};

const locationHandler = async () => {
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) {
        location = "/";
    }
    // get the route object from the routes object
    const route = routes[location] || routes["404"];
    // get the html from the template
    const html = await fetch(route.template).then((response) => response.text());
    // set the content of the content div to the html
    document.getElementById("kaka").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;

    //window.location.href = html

    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
