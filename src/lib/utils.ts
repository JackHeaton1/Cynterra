import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "a, b and c": Australian English list, no Oxford comma. */
export function formatList(items: readonly string[]): string {
  return new Intl.ListFormat("en-AU", { style: "long", type: "conjunction" }).format(items);
}
