import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "PurrCase - custom high-quality phone cases",
  description = "Create custom high-qualtiy phone cases in seconds",
  image = "/catt.jpg",
}: { title?: string; description?: string; image?: string } = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "Shakir",
    },
  };
}
