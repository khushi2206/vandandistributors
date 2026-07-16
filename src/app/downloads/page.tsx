import type { Metadata } from "next";
import { site } from "@/content/site";
import DownloadsClient from "./DownloadsClient";

export const metadata: Metadata = {
  title: `Downloads | ${site.brand.name}`,
  description: "Product catalogues and brochures for Vandan Distributors.",
};

export default function DownloadsPage() {
  return <DownloadsClient />;
}
