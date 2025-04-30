import type { MetadataRoute } from "next";

// Function to escape special characters for XML
function escapeXml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&apos;";
      case " ":
        return "&nbsp;";
      default:
        return char;
    }
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://firstpack.co.zw",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    },
  ] as MetadataRoute.Sitemap;
}
