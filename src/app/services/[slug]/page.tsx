import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DIVISIONS, Division } from "@/data/divisions";
import DivisionTemplate from "@/components/division/DivisionTemplate";

interface DivisionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DIVISIONS.map((div) => ({
    slug: div.slug,
  }));
}

export async function generateMetadata({
  params,
}: DivisionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug || d.id === slug);

  if (!division) {
    return {
      title: "Division Not Found — ARCC Media Production",
    };
  }

  return {
    title: `${division.name} Production Services (${division.number}) — ARCC Media Production`,
    description: division.fullDescription,
    keywords: [
      `ARCC ${division.name}`,
      ...division.subServices.map((s) => `${division.name} ${s.name}`),
      "ARCC Media Production",
    ],
    openGraph: {
      title: `${division.name} Production Services — ARCC Media Production`,
      description: division.shortDescription,
      images: [
        {
          url: division.heroImage,
          width: 1200,
          height: 630,
          alt: `${division.name} — ARCC Media Production`,
        },
      ],
    },
  };
}

export default async function DivisionPage({ params }: DivisionPageProps) {
  const { slug } = await params;
  const division = DIVISIONS.find((d) => d.slug === slug || d.id === slug);

  if (!division) {
    notFound();
  }

  return <DivisionTemplate division={division} />;
}
