import Image from "next/image";

export default function ImageBlock({block}) {
    //call block data 
    const asset = Array.isArray(block.image) ? block.image[0] : block.image;
    //if theres no image url return null 
    if (!asset?.url) return null;
    //Fall backs to prevent errors 
    const alt = asset.alt || block.title || "";
    const width = asset.width || 1200;   // fallback if width is null
    const height = asset.height || 800;  // fallback if height is null
    return (
        <div className="container">
            {block.title ? <h3>{block.title}</h3> : null}
            <Image
                src={asset.url}
                alt={alt}
                width={width}
                height={height}
                unoptimized
                className="w-[300px] h-full"
            />
        </div>
    );
}