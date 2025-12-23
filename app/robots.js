export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://help-animals.vercel.app/sitemap.xml", // update when domain changes
  };
}
