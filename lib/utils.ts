import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely — resolves conflicts intelligently.
 * Usage: cn("px-4 py-2", condition && "bg-blue-500", "text-white")
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a year range into a readable string.
 * e.g., formatYearRange(2022, 2026) → "2022 – 2026"
 * e.g., formatYearRange(2022, null) → "2022 – Present"
 */
export function formatYearRange(
    startYear: number,
    endYear: number | null
): string {
  return `${startYear} – ${endYear ?? "Present"}`;
}

/**
 * Truncate text to a max character length, appending ellipsis.
 * Usage: truncateText("Long description...", 100)
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Delay execution — use in async functions with await.
 * Usage: await sleep(300)
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a simple ID string from a title.
 * e.g., slugify("Spring Boot Project") → "spring-boot-project"
 */
export function slugify(text: string): string {
  return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
}