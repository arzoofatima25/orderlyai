import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes conditionally without style conflicts.
 * Combines clsx (conditional class logic) with tailwind-merge
 * (resolves conflicting Tailwind classes).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
