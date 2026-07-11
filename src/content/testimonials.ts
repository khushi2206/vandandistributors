export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  facility: string;
  modality?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "diagnostic-centre-gujarat",
    quote:
      "Vandan Distributors has been our reliable partner for contrast media and dry imaging films since 2018. Supply is consistent, pricing is transparent, and their team understands radiology procurement needs.",
    author: "Dr. R. Patel",
    role: "Radiologist",
    facility: "Multi-modality Diagnostic Centre",
    modality: "Gujarat",
  },
  {
    id: "hospital-maharashtra",
    quote:
      "The MIPS per-print model helped us avoid capital expense while keeping MRI and CT output quality stable. Response on WhatsApp and phone support has been excellent.",
    author: "Mr. Sanjay Mehta",
    role: "Imaging Department Head",
    facility: "Private Hospital",
    modality: "Maharashtra",
  },
  {
    id: "clinic-karnataka",
    quote:
      "We switched to Vandan Distributors for X-ray films and consumables after comparing multiple suppliers. Film quality is diagnostic-grade and deliveries reach us on time across Karnataka.",
    author: "Ms. Priya Nair",
    role: "Centre Administrator",
    facility: "Diagnostic Imaging Clinic",
    modality: "Karnataka",
  },
  {
    id: "nuclear-medicine-delhi",
    quote:
      "Their guidance on contrast selection and film compatibility saved us rework and repeat orders. A dependable Pan India supplier for radiology departments.",
    author: "Dr. A. Sharma",
    role: "Nuclear Medicine Consultant",
    facility: "PET-CT Centre",
    modality: "Delhi NCR",
  },
  {
    id: "tradeindia-trusted",
    quote:
      "Established in 2007 with quality-tested pharmaceutical and imaging products, Vandan Distributors is recognised as a trusted supplier for hospitals and diagnostic chains.",
    author: "Verified Business Partner",
    role: "Healthcare Buyer",
    facility: "Pan India",
    modality: "Radiology supplies & MIPS",
  },
];
