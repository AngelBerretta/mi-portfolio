import { Project } from '../types';
import redonda from '../assets/projects/redonda-fc.jpg';
import coffee from '../assets/projects/coffee-craft.jpg';
import serenity from '../assets/projects/serenity-studio.jpg';
import pawcare from '../assets/projects/pawcare.jpg';
import appweather from '../assets/projects/appweather.jpg';
import shopfast from '../assets/projects/shopfast.jpg';
import terracart from '../assets/projects/terracart.jpg';
import dashboard from '../assets/projects/ecommerce-dashboard.jpg';


export const projects: Project[] = [
  {
    id: 1,
    title: "Redonda-fc",
    description: "Portal web deportivo Redonda-fc...",
    image: redonda,
    tags: ["HTML", "CSS/SCSS", "Bootstrap"],
    codeUrl: "https://github.com/AngelBerretta/Redonda-fc",
    demoUrl: "https://redondafc.netlify.app"
  },
  {
    id: 2,
    title: "CoffeeCraft",
    description: "Sitio web estático para una cafetería ficticia...",
    image: coffee,
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/AngelBerretta/CoffeeCraft",
    demoUrl: "https://coffecrafft.netlify.app/"
  },
  {
    id: 3,
    title: "Serenity Studio",
    description: "Landing page elegante y minimalista...",
    image: serenity,
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/AngelBerretta/SERENITY-STUDIO",
    demoUrl: "https://serenityestudio.netlify.app"
  },
  {
    id: 4,
    title: "PAWCARE",
    description: "Landing page moderna y atractiva...",
    image: pawcare,
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/AngelBerretta/PAWCARE",
    demoUrl: "https://we-pawcare.netlify.app"
  },
  {
    id: 5,
    title: "AppWeather",
    description: "Aplicación del clima moderna y responsive...",
    image: appweather,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    codeUrl: "https://github.com/AngelBerretta/appweather",
    demoUrl: "https://around-weather.netlify.app"
  },
  {
    id: 6,
    title: "ShopFast",
    description: "Tienda online moderna...",
    image: shopfast,
    tags: ["React", "Vite", "TailwindCSS", "JavaScript", "API"],
    codeUrl: "https://github.com/AngelBerretta/shop",
    demoUrl: "https://theshopfast.netlify.app"
  },
  {
    id: 7,
    title: "TerraCart",
    description: "E-commerce ecológico ficticio...",
    image: terracart,
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    codeUrl: "https://github.com/AngelBerretta/TerraCart",
    demoUrl: "https://terracart.netlify.app/"
  },
  {
    id: 8,
    title: "E-commerce Dashboard",
    description: "Panel de administración moderno para ecommerce...",
    image: dashboard,
    tags: ["React", "TypeScript", "Tailwind"],
    codeUrl: "https://github.com/AngelBerretta/ForShop",
    demoUrl: "https://forshop.netlify.app/"
  }
];