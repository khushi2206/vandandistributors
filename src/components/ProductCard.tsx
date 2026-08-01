"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/content/site";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  category?: string;
  tags?: string[];
  specifications?: string[];
  usedFor?: string[];
  delay?: number;
};

export function ProductCard({
  title,
  description,
  image,
  category,
  tags,
  specifications,
  usedFor,
  delay = 0,
}: ProductCardProps) {
  const whatsappHref = `https://api.whatsapp.com/send?phone=${site.brand.whatsappNumber}&text=${encodeURIComponent(
    `Hello, I would like to inquire about ${title}.`
  )}`;

  return (
    <FadeIn delay={delay}>
      <Card className="product-card glossy-card flex h-full flex-col overflow-hidden border-0 py-0 ring-0">
        <div className="product-card__image-container relative aspect-4/3 w-full shrink-0 overflow-hidden bg-white flex items-center justify-center">
          <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-2.5 sm:p-3 transition-transform duration-500 hover:scale-105" />
          {category && (
            <Badge variant="secondary" className="absolute left-3 top-3 font-medium">
              {category}
            </Badge>
          )}
        </div>
        <CardHeader className="flex-1 gap-2 sm:gap-3">
          <CardTitle className="text-[clamp(1rem,2vw,1.125rem)] font-bold leading-snug">{title}</CardTitle>
          <CardDescription className="text-[clamp(0.875rem,1.5vw,0.95rem)] leading-relaxed">{description}</CardDescription>
          {tags && tags.length > 0 && (
            <div className="mt-2 flex min-w-0 flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        {(specifications && specifications.length > 0) || (usedFor && usedFor.length > 0) ? (
          <CardContent className="grid gap-4 pt-0">
            {specifications && specifications.length > 0 ? (
              <div className="grid gap-2">
                <strong className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Specifications
                </strong>
                <ul className="grid gap-1.5 text-sm leading-relaxed text-foreground">
                  {specifications.map((spec) => (
                    <li key={spec} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-medical)]" />
                      <span className="min-w-0 overflow-wrap-anywhere">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {usedFor && usedFor.length > 0 ? (
              <div className="grid gap-2">
                <strong className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Used For
                </strong>
                <ul className="grid gap-1.5 text-sm leading-relaxed text-foreground">
                  {usedFor.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-medical)]" />
                      <span className="min-w-0 overflow-wrap-anywhere">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CardContent>
        ) : null}
        <CardFooter className="mt-auto flex-col gap-2 pt-0 sm:flex-row w-full">
          <Button
            render={
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" data-icon="inline-start" />
                Enquire
              </a>
            }
            size="sm"
            className="cursor-pointer w-full flex-1"
          />
        </CardFooter>
      </Card>
    </FadeIn>
  );
}
