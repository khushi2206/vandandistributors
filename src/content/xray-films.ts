export type FilmVariant = {
  size: string;
  packSize?: string;
  spec?: string;
};

export type FilmProduct = {
  id: string;
  brand: string;
  name: string;
  description: string;
  variants: FilmVariant[];
  specs: string;
  image: string;
};

export const dryFilmProducts: FilmProduct[] = [
  {
    id: "fuji-film",
    brand: "Fuji Film",
    name: "Fuji Dry Imaging Film",
    description:
      "Premium dry imaging film for compatible laser and thermal imagers. High optical density, low fog, and consistent grayscale for diagnostic X-ray and CT output.",
    variants: [
      { size: "DIHL 8×10" },
      { size: "DIHL 10×12" },
      { size: "DIHL 11×14" },
      { size: "DIHL 14×17" },
      { size: "DIHT 8×10" },
      { size: "DIHT 10×12" },
      { size: "DIHT 11×14" },
    ],
    specs: "High optical density, anti-static coating, DICOM-compatible dry imager output.",
    image: "/images/xray-films/fujifilm.jpg",
  },
  {
    id: "accurate-film",
    brand: "Accurate Film",
    name: "Accurate Diagnostic Film",
    description:
      "Direct digital imaging film and paper for compatible dry imagers. Excellent bone and soft-tissue differentiation for daily radiology workloads.",
    variants: [
      { size: "8×10 Blue Base" },
      { size: "A4 Blue Base" },
      { size: "A3 Blue Base" },
      { size: "13×17 Blue Base" },
      { size: "A4 White PVC Film" },
      { size: "A4 Paper" },
      { size: "A3 White PVC Film" },
      { size: "A3 Paper" },
    ],
    specs: "High-resolution output support, long archival life, consistent diagnostic hue.",
    image: "/images/xray-films/accurate.jpg",
  },
];

export const vmsManualFilms: {
  brand: string;
  title: string;
  description: string;
  variants: FilmVariant[];
  specs: string;
  image: string;
} = {
  brand: "VMS Film",
  title: "VMS Manual X-Ray Films (Green)",
  description:
    "Medical X-ray films for manual processing and conventional darkroom workflows. Available in multiple standard sizes for general radiography.",
  variants: [
    { size: "VMS 6.5×8.5 Green" },
    { size: "VMS 8×10 Green" },
    { size: "VMS 10×12 Green" },
    { size: "VMS 12×12 Green" },
    { size: "VMS 12×15 Green" },
  ],
  specs:
    "Green-sensitive emulsion for manual processing, high contrast, compatible with standard developer/fixers. Suitable for general radiography and mobile X-ray units.",
  image: "/images/xray-films/vms-medical-xray-film.jpg",
};
