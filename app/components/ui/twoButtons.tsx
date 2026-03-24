import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TwoButtons({
  link,
  label,
  linkSecondary,
  labelSecondary,
  variant = "default",
  variantSecondary = "secondary",
}) {
  return (
    <div className="flex gap-2">
      {link && label && (
        <Button asChild variant={variant}>
          <Link href={link}>{label}</Link>
        </Button>
      )}

      {linkSecondary && labelSecondary && (
        <Button asChild variant={variantSecondary}>
          <Link href={linkSecondary}>{labelSecondary}</Link>
        </Button>
      )}
    </div>
  );
}