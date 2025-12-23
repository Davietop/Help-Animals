export default function sitemap() {
  const baseUrl = "https://help-animals.vercel.app"; // change to your real domain later

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/donate`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mission`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
    },
  ];
}
