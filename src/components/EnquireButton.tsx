import { MessageCircle } from "lucide-react";
import { productEnquiryUrl } from "@/lib/whatsapp";

type EnquireButtonProps = {
  productName: string;
  className?: string;
};

export function EnquireButton({ productName, className }: EnquireButtonProps) {
  return (
    <a
      href={productEnquiryUrl(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "vandan-btn vandan-btn--whatsapp enquire-btn"}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      Enquire on WhatsApp
    </a>
  );
}
