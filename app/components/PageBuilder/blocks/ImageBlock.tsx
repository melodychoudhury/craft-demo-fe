"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
        <div>

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
                            <div key={key} className="relative w-full max-w-sm">
                                <Carousel className="w-full">
                                    <CarouselContent>
                                        {item.image.map((img, imageIndex) => (
                                        <CarouselItem key={imageIndex} className="basis-full">
                                            <div className="h-full w-full">
                                            <Image
                                                src={img.url}
                                                alt={img.title || "slider img"}
                                                width={100}
                                                height={100}
                                                className="h-full w-full object-cover"
                                                unoptimized
                                            />
                                            </div>
                                        </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center">
                                        <CarouselPrevious className="relative left-[initial] block" />
                                        <CarouselNext className="relative left-[initial] block" />
                                    </div>
                                </Carousel>
                        </div>
                           
                               
                            );
                        })
                    )
                    }
               
               
        </div>
    );
}