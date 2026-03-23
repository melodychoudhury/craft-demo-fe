import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function TwoButtons({
    link,
    label,
    linkSecondary,
    labelSecondary
}) {
    return (
        <div className="flex gap-2">
            {link && (<Button asChild><Link href={link}>{label}</Link></Button>) }
            {linkSecondary && <Button asChild variant="secondary"><Link href={linkSecondary}>{labelSecondary}</Link></Button> }
        </div>
    );
}