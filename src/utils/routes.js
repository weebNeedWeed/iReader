let ROUTES = [
  {
    displayName: "login",
    pathName: "/user/login",
    withLayout: true,
    navDisplay: {
      whenLogin: false,
      whenLogout: true,
    },
  },
  {
    displayName: "Home",
    pathName: "/",
    withLayout: true,
    navDisplay: {
      whenLogin: true,
      whenLogout: true,
    },
  },
  {
    displayName: "Search",
    pathName: "/books/search",
    withLayout: true,
    navDisplay: {
      whenLogin: true,
      whenLogout: true,
    },
  },
  {
    displayName: "Logout",
    pathName: "/user/logout",
    withLayout: false,
    navDisplay: {
      whenLogin: true,
      whenLogout: false,
    },
  },
  {
    displayName: "books",
    pathName: "/books",
    withLayout: true,
    navDisplay: {
      whenLogin: true,
      whenLogout: true,
    },
  },
];

const notDisplayNavRoute = [
  {
    displayName: "register",
    pathName: "/user/register",
    withLayout: true,
    navDisplay: false,
  },
  {
    displayName: "booksinfo",
    pathName: "/books/info/[slug]",
    withLayout: true,
    navDisplay: false,
  },
  {
    displayName: "booksread",
    pathName: "/books/read/[slug]/[page]",
    withLayout: true,
    navDisplay: false,
  },
];

ROUTES = ROUTES.concat(notDisplayNavRoute);

export default ROUTES;
