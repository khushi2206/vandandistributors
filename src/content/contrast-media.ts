export type ContrastProduct = {
  id: string;
  name: string;
  activeIngredient: string;
  category: "x-ray" | "mri" | "oral";
  subcategory: string;
  description: string;
  iodineConc?: string;
  packs: string[];
  image: string;
  specifications?: string[];
  usedFor?: string[];
  brochure?: string;
};

const contrastMediaImages = [
  "/images/contrast-media/cardiolek-320-mg-100-ml.jpg",
  "/images/contrast-media/cardiolek-320-mg-50-ml.jpg",
  "/images/contrast-media/contrapaque-300-mg-100-ml.jpg",
  "/images/contrast-media/contrapaque-300mg-50ml.jpg",
  "/images/contrast-media/contrapaque-350-mg-100ml.jpg",
  "/images/contrast-media/contrapaque-350-mg-200ml.jpg",
  "/images/contrast-media/contrapaque-350-mg-50ml.jpg",
  "/images/contrast-media/gestrolek-100-ml.jpg",
  "/images/contrast-media/gestrolek-30-ml.jpg",
  "/images/contrast-media/lek-pamidol-370-mg-100-ml.jpg",
  "/images/contrast-media/lek-pamidol-370-mg-50-ml.jpg",
  "/images/contrast-media/magnalik-10-ml.jpg",
  "/images/contrast-media/magnalim-20-ml.jpg",
  "/images/contrast-media/trazogestro-100-ml.jpg",
  "/images/contrast-media/trazogestro-30-ml.jpg",
  "/images/contrast-media/trazograf-60-percent-20-ml.jpg",
  "/images/contrast-media/trazograf-76-percent-100-ml.jpg",
  "/images/contrast-media/trazograf-76-percent-20-ml.jpg",
] as const;

export const defaultContrastMediaImage = "/images/products/image.png";

const contrastImageAliases: Record<string, string[]> = {
  "lek-pamidol": ["lek-pamidol"],
  contrapaque: ["contrapaque"],
  "trazograf-76": ["trazograf-76"],
  "trazograf-60": ["trazograf-60"],
  cardiolek: ["cardiolek"],
  gastrolek: ["gastrolek", "gestrolek"],
  trazogastro: ["trazogastro", "trazogestro"],
  magnilek: ["magnilek", "magnalik", "magnalim"],
  gadotrast: ["gadotrast"],
};

const normalizeImageKey = (value: string) =>
  value
    .toLowerCase()
    .replace(/%/g, " percent ")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/injection|oral|contrast|media/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getContrastMediaImage = (productId: string, productName: string, activeIngredient: string) => {
  const candidates = [
    productName,
    productId,
    activeIngredient,
    ...(contrastImageAliases[productId] ?? []),
  ].map(normalizeImageKey);

  const scoredMatches = contrastMediaImages
    .map((image) => {
      const imageKey = normalizeImageKey(image.split("/").pop() ?? image);
      const score = candidates.reduce((best, candidate) => {
        if (!candidate) return best;
        if (imageKey === candidate) return Math.max(best, candidate.length + 100);
        if (imageKey.includes(candidate)) return Math.max(best, candidate.length);
        return best;
      }, 0);

      return { image, score };
    })
    .sort((left, right) => right.score - left.score);

  return scoredMatches[0]?.score ? scoredMatches[0].image : defaultContrastMediaImage;
};

export const contrastCategories = [
  {
    id: "x-ray",
    title: "X-Ray Contrast Agents",
    description:
      "Radiographic contrast media for X-ray, CT scan, cath labs, and digital subtraction angiography (DSA) — improving visibility of internal organs and structures.",
  },
  {
    id: "mri",
    title: "MRI Contrast Agents",
    description:
      "Gadolinium-based contrast agents for magnetic resonance imaging — enhancing tissue differentiation and lesion detection.",
  },
  {
    id: "oral",
    title: "Oral Contrast Media",
    description:
      "Oral contrast preparations for gastrointestinal imaging and CT enterography protocols.",
  },
] as const;

/** Vandan Distributors contrast media product catalogue */
export const contrastProducts: ContrastProduct[] = [
  {
    id: "lek-pamidol-300",
    name: "Lek-Pamidol 300 mg / 100 ml",
    activeIngredient: "Iopamidol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "Non-ionic iodinated contrast medium for intravenous use in CT, angiography, and urography. Low osmolality profile for improved patient tolerance.",
    iodineConc: "300 mg/mL",
    packs: ["100 mL vial"],
    image: getContrastMediaImage("lek-pamidol", "Lek-Pamidol 300 mg / 100 ml", "Iopamidol"),
    specifications: ["Iopamidol 61.2% w/v", "Iodine concentration: 300 mg/mL", "Pack size: 100 mL vial"],
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "contrapaque-300-100ml",
    name: "Contrapaque 300 mg / 100 ml",
    activeIngredient: "Iohexol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "Widely used non-ionic contrast agent for CT, IV urography, angiocardiography, and peripheral angiography with excellent safety profile.",
    iodineConc: "300 mg/mL",
    packs: ["100 mL vial"],
    image: getContrastMediaImage("contrapaque", "Contrapaque 300 mg / 100 ml", "Iohexol"),
    specifications: ["Iohexol 64.7% w/v", "Iodine concentration: 300 mg/mL", "Pack size: 100 mL vial"],
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "contrapaque-350-50ml",
    name: "Contrapaque 350 mg / 50 ml",
    activeIngredient: "Iohexol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "High-strength non-ionic contrast agent for CT, coronary angiography, and peripheral vascular studies.",
    iodineConc: "350 mg/mL",
    packs: ["50 mL vial"],
    image: getContrastMediaImage("contrapaque", "Contrapaque 350 mg / 50 ml", "Iohexol"),
    specifications: ["Iohexol 75.5% w/v", "Iodine concentration: 350 mg/mL", "Pack size: 50 mL vial"],
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "contrapaque-350-100ml",
    name: "Contrapaque 350 mg / 100 ml",
    activeIngredient: "Iohexol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "High-strength non-ionic contrast agent for CT, coronary angiography, and peripheral vascular studies.",
    iodineConc: "350 mg/mL",
    packs: ["100 mL vial"],
    image: getContrastMediaImage("contrapaque", "Contrapaque 350 mg / 100 ml", "Iohexol"),
    specifications: ["Iohexol 75.5% w/v", "Iodine concentration: 350 mg/mL", "Pack size: 100 mL vial"],
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "contrapaque-350-200ml",
    name: "Contrapaque 350 mg / 200 ml",
    activeIngredient: "Iohexol",
    category: "x-ray",
    subcategory: "Non-Ionic Contrast Media",
    description:
      "High-volume non-ionic contrast formulation for complex angiographic and interventional procedures.",
    iodineConc: "350 mg/mL",
    packs: ["200 mL vial"],
    image: getContrastMediaImage("contrapaque", "Contrapaque 350 mg / 200 ml", "Iohexol"),
    specifications: ["Iohexol 75.5% w/v", "Iodine concentration: 350 mg/mL", "Pack size: 200 mL vial"],
    usedFor: ["Angiography", "Angioplasty", "Used by Cardiologist doctors"],
    brochure: "/downloads/Eskay-Iodine---Brochure.pdf",
  },
  {
    id: "trazograf-76",
    name: "Trazograf 76% Injection",
    activeIngredient: "Meglumine & Sodium Diatrizoate",
    category: "x-ray",
    subcategory: "Ionic Contrast Media",
    description:
      "High-concentration ionic contrast medium for angiography, IV urography, and CT applications requiring 370 mg/mL iodine.",
    iodineConc: "370 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial"],
    image: getContrastMediaImage("trazograf-76", "Trazograf 76% Injection", "Meglumine & Sodium Diatrizoate"),
  },
  {
    id: "trazograf-60",
    name: "Trazograf 60% Injection",
    activeIngredient: "Meglumine Diatrizoate",
    category: "x-ray",
    subcategory: "Ionic Contrast Media",
    description:
      "Ionic contrast agent at 282 mg/mL iodine concentration for general radiographic and urographic procedures.",
    iodineConc: "282 mg/mL",
    packs: ["20 mL amp", "50 mL vial", "100 mL vial"],
    image: getContrastMediaImage("trazograf-60", "Trazograf 60% Injection", "Meglumine Diatrizoate"),
  },
  {
    id: "cardiolek",
    name: "Cardiolek Injection",
    activeIngredient: "Iodixanol",
    category: "x-ray",
    subcategory: "Iso-Osmolar Contrast Media",
    description:
      "Iso-osmolar contrast medium ideal for cardiac angiography, coronary interventions, and high-risk patients requiring optimal tolerability.",
    iodineConc: "320 mg/mL",
    packs: ["50 mL vial", "100 mL vial"],
    image: getContrastMediaImage("cardiolek", "Cardiolek Injection", "Iodixanol"),
  },
  {
    id: "gastrolek",
    name: "Gastrolek Oral Contrast",
    activeIngredient: "Sodium Diatrizoate",
    category: "oral",
    subcategory: "Oral Contrast Media",
    description:
      "Oral contrast preparation for upper GI and abdominal CT studies requiring bowel opacification.",
    iodineConc: "249.64 mg/mL",
    packs: ["30 mL bottle", "100 mL bottle"],
    image: getContrastMediaImage("gastrolek", "Gastrolek Oral Contrast", "Sodium Diatrizoate"),
  },
  {
    id: "trazogastro",
    name: "Trazogastro Oral Contrast",
    activeIngredient: "Meglumine & Sodium Diatrizoate",
    category: "oral",
    subcategory: "Oral Contrast Media",
    description:
      "High-density oral contrast medium for gastrointestinal radiography and CT enterography protocols.",
    iodineConc: "370 mg/mL",
    packs: ["30 mL bottle", "100 mL bottle"],
    image: getContrastMediaImage("trazogastro", "Trazogastro Oral Contrast", "Meglumine & Sodium Diatrizoate"),
  },
  {
    id: "magnilek",
    name: "Magnilek Injection",
    activeIngredient: "Gadopentetate Dimeglumine",
    category: "mri",
    subcategory: "MRI Contrast Media",
    description:
      "Gadolinium-based MRI contrast agent for enhancement of lesions, vascular structures, and inflammatory tissue in brain and body MRI.",
    iodineConc: "0.5 mmol/mL",
    packs: ["10 mL vial", "20 mL vial"],
    image: getContrastMediaImage("magnilek", "Magnilek Injection", "Gadopentetate Dimeglumine"),
  },
  {
    id: "gadotrast",
    name: "Gadotrast Injection",
    activeIngredient: "Gadoteric Acid (Macrocyclic)",
    category: "mri",
    subcategory: "Macrocyclic MRI Contrast Media",
    description:
      "Macrocyclic gadolinium chelate offering high stability and excellent contrast enhancement for MRI across body regions.",
    iodineConc: "0.5 mmol/mL",
    packs: ["10 mL vial", "20 mL vial"],
    image: getContrastMediaImage("gadotrast", "Gadotrast Injection", "Gadoteric Acid"),
  },
];

export const contrastSpecsTable = [
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 61.2% w/v", iodine: "300 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 69.4% w/v", iodine: "340 mg/mL", pack: "50 mL vial, 100 mL vial" },
  { product: "Lek-Pamidol Injection", ingredient: "Iopamidol 75.5% w/v", iodine: "370 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Contrapaque Injection", ingredient: "Iohexol 64.7% w/v", iodine: "300 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial, 200 mL vial" },
  { product: "Contrapaque Injection", ingredient: "Iohexol 75.5% w/v", iodine: "350 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial, 200 mL vial" },
  { product: "Trazograf 76% Injection", ingredient: "Meglumine & Sodium Diatrizoate", iodine: "370 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Trazograf 60% Injection", ingredient: "Meglumine Diatrizoate 60% w/v", iodine: "282 mg/mL", pack: "20 mL amp, 50 mL vial, 100 mL vial" },
  { product: "Cardiolek Injection", ingredient: "Iodixanol", iodine: "320 mg/mL", pack: "50 mL vial, 100 mL vial" },
  { product: "Magnilek Injection", ingredient: "Gadopentetate Dimeglumine", iodine: "0.5 mmol/mL", pack: "10 mL vial, 20 mL vial" },
  { product: "Gadotrast Injection", ingredient: "Gadoteric Acid (Macrocyclic)", iodine: "0.5 mmol/mL", pack: "10 mL vial, 20 mL vial" },
  { product: "Trazogastro Oral", ingredient: "Meglumine & Sodium Diatrizoate", iodine: "370 mg/mL", pack: "30 mL / 100 mL bottle" },
  { product: "Gastrolek Oral", ingredient: "Sodium Diatrizoate", iodine: "249.64 mg/mL", pack: "30 mL / 100 mL bottle" },
];

