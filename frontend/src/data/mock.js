export const siteData = {
  header: {
    logo: "PIXAR",
    navItems: [
      { label: "FILMS", href: "#" },
      { label: "TECHNOLOGY", href: "#", active: true },
      { label: "CAREERS", href: "#" },
      { label: "MORE", href: "#" }
    ]
  },
  hero: {
    title: "R E N D E R M A N",
    subtitle: 'Watch "RenderMan Show Reel"',
    subtitleBold: "RenderMan Show Reel",
    videoUrl: "https://player.vimeo.com/video/911713522?autoplay=1",
    backgroundImage: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg"
  },
  sections: [
    {
      id: "versatile-renderer",
      imagePosition: "left",
      logo: "RENDERMAN.",
      title: "The World's Most Versatile Renderer",
      description: "RenderMan® is Pixar's Academy Award®-winning rendering technology, excelling at producing stunning imagery for VFX and feature film animation. With a new state-of-the-art framework optimized for physically-based rendering, RenderMan can deliver unmatched flexibility for any production pipeline.",
      buttonText: "VISIT RENDERMAN.COM",
      buttonUrl: "https://renderman.pixar.com",
      image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/485b26c1-eb3a-48a7-bab6-437b3938f44c/RenderMan_OCIO_Aces_Header2.jpg",
      bgColor: "#ffffff",
      theme: "white"
    },
    {
      id: "cutting-edge",
      imagePosition: "right",
      title: "Cutting Edge Tools",
      description: "RenderMan delivers out-of-box production tools straight from Pixar and ILM, including materials and light transport...no development required.",
      features: [
        {
          title: "Photorealistic Images",
          text: "Physically based shading allows RenderMan to deliver highly realistic lighting with minimal setup, including full support for multi-bounce ray traced global illumination and ray traced subsurface scattering."
        },
        {
          title: "MaterialX Lama",
          text: "Thanks to a collaborative effort between Pixar and Industrial Light & Magic, RenderMan ships with a state-of-the-art material layering system called MaterialX Lama, a component of the MaterialX standard."
        },
        {
          title: "Created for Artists",
          text: "Pixar materials come fully loaded with all of the creative options for look development demanded by the shading artists at Pixar. Use Pixar Surface to create everything from glass to the most incredibly subtle skin you can image."
        },
        {
          title: "Analytic Physical Lighting",
          text: "This new library of physically based lights offers standard features like color temperature, exposure, and IES profiles ... but also includes specialized Light Filters which have been developed for feature film."
        },
        {
          title: "Extensive plugin support",
          text: "RenderMan has seamless Xgen integration with Maya and supports the leading 3D applications for production rendering."
        }
      ],
      image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/8adc9e53-2435-4865-af54-4710c293af14/Lama---Stirling---by-Eugene-Riecansky.jpg",
      bgColor: "#ffffff",
      theme: "white"
    },
    {
      id: "careers",
      imagePosition: "left",
      title: "Careers at Pixar",
      description: "Our technology teams are at the forefront of innovation, constantly pushing the boundaries of what's possible in the realm of animation. With their expertise and passion for developing cutting-edge tools and techniques, they breathe life into our characters and worlds, delivering a truly immersive and magical experience to our audiences.",
      buttonText: "LEARN MORE",
      buttonUrl: "https://www.pixar.com/careers",
      image: "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/42a4f404-b669-4acc-93c8-1d42e679e27f/brochure_foldout.jpg",
      bgColor: "#f7f7f5",
      theme: "light"
    }
  ],
  footer: {
    links: [
      { label: "Privacy Policy", href: "https://privacy.thewaltdisneycompany.com/en" },
      { label: "Your US State Privacy Rights", href: "https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/" },
      { label: "Children's Online Privacy Policy", href: "https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/" },
      { label: "Interest Based Ads", href: "https://privacy.thewaltdisneycompany.com/en/privacy-controls/online-tracking-and-advertising/" }
    ],
    copyright: "© 1986-2026 Disney-Pixar"
  }
};
