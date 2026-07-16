export type DownloadItem = {
  id: string;
  title: string;
  description: string;
  category: "catalogue" | "brochure" | "presentation";
  file: string;
  size?: string;
};

export const downloads: DownloadItem[] = [
  {
    id: "main-brochure",
    title: "Vandan Distributors Product Brochure",
    description: "Complete product catalogue covering contrast media, films, MIPS, and diagnostic consumables.",
    category: "catalogue",
    file: "/downloads/broucher-120825.pdf",
  },
  {
    id: "eskay-iodine",
    title: "Eskay Iodine / Contrast Media Brochure",
    description: "Technical brochure for iodinated contrast media products and specifications.",
    category: "brochure",
    file: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
];

export const downloadCategories = [
  { id: "all", label: "All Downloads" },
  { id: "catalogue", label: "Product Catalogues" },
  { id: "brochure", label: "Brochures" },
] as const;
