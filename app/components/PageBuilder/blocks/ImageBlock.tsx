"use client";
import * as React from "react"
import Image from "next/image";
import Fade from "embla-carousel-fade"
import Play from "embla-carousel-autoplay"
import Link from "next/link";
import { resolveHref } from "@/app/lib/resolveHref";
import TwoButtons from "../../ui/twoButtons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function ImageBlock({block}) {
     const imageSlider = block.imageSlider?.filter((item) => item.image?.length) ?? [];
     
         //for carousel dots
         const [api, setApi] = React.useState<CarouselApi>()
         const [current, setCurrent] = React.useState(0)
         const [count, setCount] = React.useState(0)
         React.useEffect(() => {
             if (!api) return
     
             setCount(api.scrollSnapList().length)
             setCurrent(api.selectedScrollSnap())
     
             api.on("select", () => {
             setCurrent(api.selectedScrollSnap())
             })
         }, [api])
       
        return (
            <div>
                <Carousel setApi={setApi} plugins={[Fade(), Play()]} opts={{ loop: true }} className="relative bg-black">
                    <CarouselContent>
                        {imageSlider.map((item, sliderIndex) => {
                            const link = item.linkHandle?.url ? item.linkHandle?.url : "no-link";
                            const linkSecondary = item.linkHandle2?.url ? item.linkHandle2?.url : "no-link";
                            const imgList = item.image;
                        
                            return (
                                <CarouselItem className="basis-full h-full pl-0 transition-opacity duration-500 ease-in-out">
                                    <div className="h-[600px] w-full relative" key={item.id ?? `sliderImage-${sliderIndex}`}>
                                        {imgList.map((img, imgIndex) => {
                                            return (
                                                <div className="h-[600px] w-full bg-black relative" key={img.id ?? `img-${imgIndex}`}>
                                                    <Image
                                                        src={img.url}
                                                        alt={img.title || "slider img"}
                                                        width={800}
                                                        height={1000}
                                                        className="h-full w-full object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                            );
                                        })}
                                        <div className="absolute z-10 text-white top-0 flex justify-center flex-col w-full items-center">
                                            <h3>{item.title}</h3>
                                            <p>{item.body}</p>
                                            <TwoButtons
                                                link={link}
                                                label={item.linkHandle?.label}
                                                linkSecondary={linkSecondary}
                                                labelSecondary={item.linkHandle2?.label}
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-opacity ${
                                current === index
                                ? "bg-white opacity-100"
                                : "bg-white/50 opacity-60"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        );

    
}


