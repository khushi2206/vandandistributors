import { site } from "@/content/site";

export function whatsappUrl(message: string) {
  return `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(message)}`;
}

export function generalEnquiryUrl() {
  return whatsappUrl("Hello, I would like to know more about Vandan Distributors products.");
}

export function productEnquiryUrl(productName: string) {
  return whatsappUrl(`Hello, I would like to enquire about ${productName}.`);
}

export function consultationUrl() {
  return whatsappUrl("Hello, I want a product consultation for Vandan Distributors.");
}
