const ROUTES = [
  {
    displayName: "home",
    pathName: "/",
    withLayout: true,
    navDisplay: {
      whenLogin: true,
      whenLogout: true,
    },
  },
  {
    displayName: "login",
    pathName: "/login",
    withLayout: true,
    navDisplay: {
      whenLogin: false,
      whenLogout: true,
    },
  },
  {
    displayName: "register",
    pathName: "/register",
    withLayout: true,
    navDisplay: false,
  },
];

export default ROUTES;
