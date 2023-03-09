export default [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Product",
    slug: "#",
    childrens: [
      {
        name: "SVARA APPS",
        slug: "/apps",
        as: "/apps",
      },
      {
        name: "SVARA AIRCAST",
        slug: "/aircast",
        as: "/aircast",
      },
      {
        name: "SVARA SOUNDSIGHT",
        slug: "/soundsight",
        as: "/soundsight",
      },
      {
        name: "SVARA CASTLINE",
        slug: "/castline",
        as: "/castline",
      },
      {
        name: "SVARA ADS",
        slug: "/ads",
        as: "/ads",
      },
    ],
  },
  {
    name: "Blog",
    slug: "/blog",
  },
  {
    name: "About",
    slug: "/profile",
  },
  {
    name: "Career",
    slug: "/career",
  },
  {
    name: "LOGIN",
    slug: "app.svara.id",
    isOpen: true,
  },
];
