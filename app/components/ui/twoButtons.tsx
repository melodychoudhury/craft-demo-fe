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
    <div className={` ${link && linkSecondary ? 'flex gap-2' : ''}`}>
      {link && label && (
        <Button className="text-sm" asChild variant={variant}>
          <Link href={link}>{label}</Link>
        </Button>
      )}

      {linkSecondary && labelSecondary && (
        <Button className="text-sm" asChild variant={variantSecondary}>
          <Link href={linkSecondary}>{labelSecondary}</Link>
        </Button>
      )}
    </div>
  );
}