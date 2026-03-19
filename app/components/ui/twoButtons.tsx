import Link from "next/link";

export default function TwoButtons({
    link,
    label,
    linkSecondary,
    labelSecondary
}) {
    return (
        <div className="flex">
            <Link href={link}>{label}</Link>
            <Link href={linkSecondary}>{labelSecondary}</Link>
        </div>
    );
}