export type OtherProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
};

export const otherProductCategories = [
  "Barium & GI Contrast",
  "Injector Accessories",
  "Ultrasound & ECG Consumables",
  "Endoscopy Media",
  "Radiology Accessories",
] as const;

export const otherProducts: OtherProduct[] = [
  {
    id: "microbar-300",
    name: "Microbar 300 mg",
    description: "Barium sulphate contrast preparation for GI radiography and fluoroscopy studies.",
    category: "Barium & GI Contrast",
    image: "/images/other-products/microbar-powder-3.5kg.jpg",
  },
  {
    id: "microbar-suspension",
    name: "Microbar Suspension 1 Ltr",
    description: "Ready-to-use barium suspension for upper and lower GI tract examinations.",
    category: "Barium & GI Contrast",
    image: "/images/other-products/microbar-suspension-1ltr.jpg",
  },
  {
    id: "microbar-powder",
    name: "Microbar 3.5 kg Powder",
    description: "Bulk barium powder for hospital compounding and high-volume GI imaging departments.",
    category: "Barium & GI Contrast",
    image: "/images/other-products/microbar-powder-3.5kg.jpg",
  },
  {
    id: "injector-syringe",
    name: "Injector Syringe",
    description: "Universal contrast injector syringes compatible with all major CT injector systems.",
    category: "Injector Accessories",
    image: "/images/other-products/antmed-syringe-100ml.jpg",
  },
  {
    id: "extension-tube-150",
    name: "Extension Tube 150 cm",
    description: "High-pressure extension tubing for contrast injection systems in CT and angiography suites.",
    category: "Injector Accessories",
    image: "/images/other-products/extension-tube-150cm.jpg",
  },
  {
    id: "extension-tube-200",
    name: "Extension Tube 200 cm",
    description: "Extended-length contrast delivery tubing for flexible injector positioning in cath labs.",
    category: "Injector Accessories",
    image: "/images/other-products/extension-tube-200cm.jpg",
  },
  {
    id: "olympus-normal-roll",
    name: "Normal Thermal Roll",
    description: "Standard-grade thermal paper roll for endoscopy and ultrasound image printing.",
    category: "Endoscopy Media",
    image: "/images/other-products/olympus-normal-roll.jpg",
  },
  {
    id: "olympus-glossy-roll",
    name: "High Glossy Thermal Roll",
    description: "Premium glossy thermal roll for high-definition endoscopic image documentation.",
    category: "Endoscopy Media",
    image: "/images/other-products/olympus-high-glossy-roll.jpg",
  },
  {
    id: "standard-thermal-roll",
    name: "Standard Thermal Roll",
    description: "Standard thermal paper for compatible medical printers in ultrasound and endoscopy workflows.",
    category: "Endoscopy Media",
    image: "/images/other-products/sony-normal-roll.jpg",
  },
  {
    id: "high-gloss-thermal-roll",
    name: "High Glossy Thermal Roll",
    description: "High-gloss thermal media for premium image presentation on compatible medical printers.",
    category: "Endoscopy Media",
    image: "/images/other-products/sony-high-glossy-roll.jpg",
  },
  {
    id: "ultrasound-jelly",
    name: "Ultrasound Jelly",
    description: "Acoustic coupling gel for ultrasound examinations — bacteriostatic, non-staining formula.",
    category: "Ultrasound & ECG Consumables",
    image: "/images/other-products/ultrasound-jelly.jpg",
  },

  {
    id: "arihant-developer",
    name: "Arihant Developer",
    description: "X-ray film developer solution for manual processing darkroom workflows.",
    category: "Radiology Accessories",
    image: "/images/other-products/xray-developer-powder.jpg",
  },

];
