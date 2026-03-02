// src/content/imageMap.ts
const images = import.meta.glob("../../assets/*.{jpg,jpeg,png}", { eager: true, query: "?url", import: "default" });

export const imageMap: Record<string, string> = Object.entries(images).reduce(
  (acc, [path, module]) => {
    const filename = path.split("/").pop(); 
    if (filename) acc[filename] = module as string;
    return acc;
  },
  {} as Record<string, string>
);