export const Navitem = [
  {
    name: "Dashboard",
    icon: "fi-bs-apps",
    path: "/dashboard",
  },
  {
    name: "About",
    icon: "fi-bs-portrait",
    path: "/about",
  },
  {
    name: "Setting",
    icon: "fi-bs-settings-sliders",
    path: "/setting",
    routes: [
      {
        name: "Setting 1",
        icon: "fi-bs-settings",
        path: "/setting/satu",
      },
      {
        name: "Setting 2",
        icon: "fi-bs-bell-ring",
        path: "/setting/dua",
      },
      {
        name: "Setting 3",
        icon: "fi-bs-broom",
        path: "/setting/tiga",
      },
    ],
  },
  {
    name: "Account",
    icon: "fi-bs-user",
    path: "/account",
  },
];
