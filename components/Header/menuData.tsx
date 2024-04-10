import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2.3,
    title: "About us",
    newTab: false,
    path: "/about",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 31,
        title: "Web Services",
        newTab: false,
        path: "/web",
      },
      {
        id: 35,
        title: "App Services",
        newTab: false,
        path: "/app",
      },
      {
        id: 35.1,
        title: "AI Integration",
        newTab: false,
        path: "/ai",
      },
      {
        id: 36,
        title: "Cloud Services",
        newTab: false,
        path: "/cloud",
      },
    ],
  },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },

  {
    id: 3,
    title: "Projects",
    newTab: false,
    path:"/#projects"
    // submenu: [
    //   {
    //     id: 31,
    //     title: "Blog Grid",
    //     newTab: false,
    //     path: "/blog",
    //   },
    //   // {
    //   //   id: 34,
    //   //   title: "Sign In",
    //   //   newTab: false,
    //   //   path: "/auth/signin",
    //   // },
    //   // {
    //   //   id: 35,
    //   //   title: "Sign Up",
    //   //   newTab: false,
    //   //   path: "/auth/signup",
    //   // },
    //   {
    //     id: 35,
    //     title: "Docs",
    //     newTab: false,
    //     path: "/docs",
    //   },
    //   {
    //     id: 35.1,
    //     title: "Support",
    //     newTab: false,
    //     path: "/contact",
    //   },
    //   {
    //     id: 36,
    //     title: "404",
    //     newTab: false,
    //     path: "/error",
    //   },
    // ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
