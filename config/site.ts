export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/project",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/project",
    },
    {
      label: "Exit",
      href: "/"
    }
  ],
  links: {
    github: "https://github.com/ChanchakornP",
    linkedin: "https://linkedin.com/in/chanchakornp",
  },
};

export const achievementConfig = [
  {
    title: "Deep Learning Certificate",
    subtitle: "Test",
    image: "/certificates/Deep Learning.png",
  },
  {
    title: "SuperAI Engineer",
    subtitle: "Test",
    image: "/certificates/SuperAI Certificate.png",
  },
];