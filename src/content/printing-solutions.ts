export type PrintingSolution = {
  id: string;
  modality: string;
  title: string;
  description: string;
  features: string[];
  outputFormats: string[];
  rollTypes?: { label: string; options: string[] }[];
  image: string;
};

export const mipsOverview = {
  title: "Medical Imaging Solutions (MIPS)",
  subtitle: "Versatile DICOM printing on conventional films, white medical-grade films, and paper.",
  description:
    "Vandan Distributors MIPS is an end-to-end solution with zero capital expense. We provide the printer, DICOM software, ink, media, maintenance, and service - you pay only per print.",
  benefits: [
    "Save up to 50% on printing costs",
    "No capital expenditure - all-in-one per-print model",
    "Maintenance, software updates, and service included",
    "Connect to multiple modalities via DICOM",
    "Print on blue-base film, white medical film, or paper",
    "Customisable software with quick processing",
  ],
};

export const printingSolutions: PrintingSolution[] = [
  {
    id: "mri-printing",
    modality: "MRI",
    title: "MRI Solution",
    description:
      "High-resolution DICOM print output for brain, spine, and body MRI studies. Crisp grayscale reproduction on diagnostic film or paper for referring physicians and patient records.",
    features: [
      "DICOM SCP connectivity to MRI scanners",
      "Multi-series layout with annotations",
      "Film and paper output options",
      "Per-print billing with no capex",
    ],
    outputFormats: ['10" x 12"', '14" x 17"', "A4 PVC", "A4 Paper", "A3 PVC", "A3 Paper", '13" x 17"'],
    image: "/images/solutions/ct-solution.jpg",
  },
  {
    id: "ct-printing",
    modality: "CT",
    title: "CT Scan Solution",
    description:
      "Reliable CT image printing for high-volume diagnostic centres. Consistent window/level rendering and multi-slice layouts for thoracic, abdominal, and angiographic studies.",
    features: [
      "High-throughput DICOM print queue",
      "Customisable series selection and layout",
      "White film and blue-base film support",
      "Included maintenance and ink supply",
    ],
    outputFormats: ['8" x 10"', '10" x 12"', '14" x 17"', "A4 PVC", "A4 Paper", "A3 Paper", "A3 PVC", '13" x 17"'],
    image: "/images/solutions/ct-solution.jpg",
  },
  {
    id: "ultrasound-printing",
    modality: "Ultrasound",
    title: "Ultrasound Solution",
    description:
      "Excellent image quality for obstetric, abdominal, and vascular ultrasound outputs. Trusted by centres for sonography print output on film and paper.",
    features: [
      "Colour and grayscale ultrasound support",
      "Multi-image grid layouts",
      "Paper and glossy roll options",
      "Quick processing for busy OPD workflows",
    ],
    outputFormats: ["A4 PVC", "A4 Paper", "A3 Paper", "Glossy Roll", "Standard Roll"],
    rollTypes: [
      { label: "Glossy Roll", options: ["Sony High Glossy Roll", "Olympus High Glossy Roll"] },
      { label: "Standard Roll", options: ["Sony Normal Roll", "Olympus Normal Roll"] },
    ],
    image: "/images/solutions/usg-solution.jpg",
  },
  {
    id: "xray-printing",
    modality: "X-Ray",
    title: "X-Ray Solution",
    description:
      "DICOM solution for CR/DR X-ray systems. High-contrast bone and chest film output with flexible sizing for radiology departments and teleradiology centres.",
    features: [
      "DICOM print from CR/DR modalities",
      "Blue-base and white film output",
      "Multiple size formats including 13x17",
      "Zero capital expense model",
    ],
    outputFormats: ['8" x 10"', '10" x 12"', '13" x 17"', "A4 PVC", "A4 Paper", "A3 Paper", "A3 PVC"],
    image: "/images/solutions/xray-solution.jpg",
  },
  {
    id: "pet-ct-printing",
    modality: "PET-CT",
    title: "PET-CT Solution",
    description:
      "Fusion image and multi-planar reconstruction printing for nuclear medicine and oncology centres requiring combined functional and anatomical documentation.",
    features: [
      "Fusion image layout support",
      "High-density film for PET-CT reads",
      "DICOM storage and SCP integration",
      "End-to-end service and maintenance",
    ],
    outputFormats: ['10" x 12"', '14" x 17"', "A4 PVC", "A4 Paper", "A3 PVC", "A3 Paper"],
    image: "/images/solutions/pet-ct-solution.jpg",
  },
];

export const mipsIncludes = [
  { label: "Vandan Distributors Printer", detail: "Medical-grade DICOM print engine" },
  { label: "DICOM Software", detail: "Customisable layout and modality connectivity" },
  { label: "Ink & Media", detail: "Films, paper, and consumables supplied" },
  { label: "Maintenance", detail: "Full service and peace of mind" },
  { label: "Per-Print Billing", detail: "No capital expense, pay as you print" },
];

export const coverageRegions = ["Gujarat"];

export const officeLocations = ["Visnagar"];
