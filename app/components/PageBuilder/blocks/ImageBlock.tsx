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

    const imageSlider = block.imageSlider?.filter((item) => item.image?.length) ?? [];


    return (
        <div className="container">

            {block.title ? <h2>{block.title}</h2> : null} 

           
           {block.image?.length > 0 && (
            <div className="h-[100px] w-[100px]">
                <Image
                src={asset.url}
                alt={alt}
                width={width}
                height={height}
                unoptimized
                className="w-[300px] h-full"
                />
            </div>
            )}
            

            {/* imgSlider matrix */}
            
            {imageSlider.length > 0 && (
                imageSlider.map((item, sliderIndex) => {
                    const key = item.id ?? `sliderImage-${sliderIndex}`;
                
                    return (
                    // inner img map
                    <div key={key} className="flex gap-2">
                        {item.image.map((img, imageIndex) => {
                            return (
                                <div className="h-[100px] w-[100px]" key={imageIndex}>
                                    <Image src={img.url}
                                        alt={img.title || "slider img"}
                                        width={100}
                                        className="w-full h-full object-cover"
                                        height={100}
                                        unoptimized
                                    />
                                </div>
                            )
                        })}
                        </div>
                    );
                })
            )
            }
        </div>
    );
}