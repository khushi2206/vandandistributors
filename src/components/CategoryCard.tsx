"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";

type CategoryCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
  delay?: number;
};

export function CategoryCard({ href, title, description, image, tag, delay = 0 }: CategoryCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link href={href} className="category-card-link">
        <Card className="category-card glossy-card h-full overflow-hidden border-0 py-0 ring-0">
          <div className="relative aspect-16/10 w-full overflow-hidden bg-white">
            <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-[#071525]/70 via-[#071525]/20 to-transparent" />
            {tag && (
              <Badge className="absolute left-4 top-4 bg-white/90 text-[#0c4a6e]">{tag}</Badge>
            )}
          </div>
          <CardHeader className="gap-2">
            <CardTitle className="text-[clamp(1.05rem,2vw,1.25rem)] font-bold">{title}</CardTitle>
            <CardDescription className="text-[clamp(0.95rem,1.5vw,1rem)] leading-relaxed">{description}</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between gap-2">
            <span className="category-card__cta">
              View category
              <ChevronRight className="size-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </FadeIn>
  );
}
