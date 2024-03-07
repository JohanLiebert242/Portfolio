import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
    {
        id: nanoid(),
        title: "HTML&CSS",
        icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
        text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
    },
    {
        id: nanoid(),
        title: "Javascript",
        icon: <FaJs className="h-16 w-16 text-emerald-500" />,
        text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
    },
    {
        id: nanoid(),
        title: "React",
        icon: <FaReact className="h-16 w-16 text-emerald-500" />,
        text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
    },
];

export const projects = [
    {
        id: nanoid(),
        img: "https://i.pinimg.com/564x/87/b8/97/87b897f825020044fd5c1a65688ff2a3.jpg",
        url: "https://mix-master-practice.netlify.app/",
        github: "https://github.com/JohanLiebert242/MixMaster",
        title: "Mix Master",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    },
    {
        id: nanoid(),
        img: "https://i.pinimg.com/564x/73/a3/be/73a3bede55dcea35e8c3f784da973876.jpg",
        url: "https://cart-practice-react.netlify.app/",
        github: "https://github.com/JohanLiebert242/FundamentalReactProjects/tree/main/cart",
        title: "Cart",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    },
    {
        id: nanoid(),
        img: "https://i.pinimg.com/736x/cb/50/a7/cb50a7c6234f9be2d64a44f2ba64bda8.jpg",
        url: "https://unsplash-practice-react.netlify.app/",
        github: "https://github.com/JohanLiebert242/UnsplashImageProject",
        title: "Unsplash",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    },
];
