import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";

export const projectsPortfolio = [
    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs: [
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/NelsonFM23/Control-GASTOS.git",
        website:"https://main--silly-babka-17bf23.netlify.app/"
    },
    {
        title: "Todo list",
        image: tareasProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"Semantic UI React",   src:semanticImage  },
        ],
        description: "Application created with React JS and to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/NelsonFM23/LISTAREAS-REACT.git",
        website:"https://main--deft-bonbon-802d2c.netlify.app/"
    },
    {
        title: "Simpsons API",
        image: simpsonProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
        repository: "AQUI DEBEN COLOCAR EL LINK DEL GITHUB DEL PROYECTO",
        website:"#!" //ustedes deben colocar aquí el link del enlace público de netlify
    },
    {
        title: "Marvel API",
        image: marvelProject,
        techs: [
            {name:"React", src:reactImage},
            {name:"React Router",   src:reactRouterdomImage  },
            {name:"Sass",   src:sassImage  },
            {name:"Semantic",   src:semanticImage  },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/NelsonFM23/MARVEL-REACT.git",
        website:"https://main--thriving-duckanoo-77fff3.netlify.app/"
    },
    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs: [
            {name:"React JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/NelsonFM23/FORMULARIODINAMICO.git",
        website:"https://main--fancy-hummingbird-c1b962.netlify.app/"
    },
    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs: [
            {name:"Vite", src:viteImage},
            {name:"Chakra",   src:chakraImage  },
            {name:"React Router DOM",   src:reactRouterdomImage  },
        ],
        description: "Application created with Vite where you can save the information and see it on a summary.",
        repository: "https://github.com/NelsonFM23/GASOLINERA-VITE.git",
        website:"https://main--tiny-muffin-4a00a0.netlify.app/"
    },
    
];