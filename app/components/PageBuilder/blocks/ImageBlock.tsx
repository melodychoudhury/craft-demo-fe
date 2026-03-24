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
     console.log(block.toggle);
     
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
            <div className={`w-full overflow-hidden ${block.toggle2 ? "m-4 lg:my-12" : ""} ${block.toggle ? "ml-4 lg:ml-12" : ""}`}>
                <Carousel setApi={setApi} plugins={block.toggle ? [] : [Play(), Fade()]} opts={block.toggle ? { loop: true, align: "start" } : { loop: true }} className={block.toggle ? "relative": "bg-black relative"}>
                    <CarouselContent>
                        {imageSlider.map((item, sliderIndex) => {
                            const link = item.linkHandle?.url ? item.linkHandle?.url : "no-link";
                            const linkSecondary = item.linkHandle2?.url ? item.linkHandle2?.url : "no-link";
                            const imgList = item.image;
                        
                            return (
                                <CarouselItem className={block.toggle ? "pl-4 basis-[80%] 2xl:basis-[40%] rounded-2xl" : "basis-full h-full pl-0 transition-opacity duration-1500 ease-in-out relative"}>
                                    <div className={`md:h-[500px] lg:h-[600px] bg-black dark-overlay w-full relative ${block.toggle ? 'rounded-2xl overflow-hidden h-[250px]' : "h-[300px]"}`} key={item.id ?? `sliderImage-${sliderIndex}`}>
                                        {imgList.map((img, imgIndex) => {
                                            return (
                                                <div className={block.toggle ? "absolute inset-0" : "h-full w-full bg-black relative"} key={img.id ?? `img-${imgIndex}`}>
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
                                        {!block.toggle ? (
                                            <div className="absolute z-[100] text-white top-0 lg:gap-2 flex justify-center flex-col w-full items-center p-4 lg:p-8 ">
                                                {item.title && (<h2 className="text-2xl lg:text-5xl capitalize">{item.title}</h2>)}
                                                {item.body && (<p className="font-medium text-lg lg:text-xl underline underline-offset-5">{item.body}</p>)}
                                                <div className="mt-4">
                                                    <TwoButtons
                                                        link={link === "no-link" ? null : link}
                                                        label={item.linkHandle?.label}
                                                        linkSecondary={linkSecondary === "no-link" ? null : link}
                                                        labelSecondary={item.linkHandle2?.label}
                                                    />
                                                </div>
                                            </div>
                                        ) : <div className={`absolute z-[100] text-white top-0 lg:gap-2 p-4 lg:p-8 flex flex-col h-full ${item.body2 ? 'justify-between' : 'justify-end'}`}>
                                                {item.body2 && (<p className="text-md lg:text-lg">{item.body2}</p>)}
                                                <div>
                                                    {item.title && (<h2 className="text-xl lg:text-4xl capitalize">{item.title}</h2>)}
                                                    {item.body && (<p className="font-medium text-md lg:text-lg">{item.body}</p>)}
                                                    <div className="mt-4">
                                                        <TwoButtons
                                                            link={link === "no-link" ? null : link}
                                                            label={item.linkHandle?.label}
                                                            linkSecondary={linkSecondary === "no-link" ? null : link}
                                                            labelSecondary={item.linkHandle2?.label}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    {!block.toggle && <CarouselPrevious />}
                    {!block.toggle && <CarouselNext />}
                    <div className={`flex gap-2 z-20 ${block.toggle ? "justify-center items-center mt-8" : "absolute bottom-6 left-1/2 z-20 -translate-x-1/2 absolute left-1/2"}`}>
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2.5 w-2.5 rounded-full transition-opacity ${
                                current === index
                                ? `opacity-100 ${block.toggle ? "bg-black" : "bg-white"}`
                                : `opacity-60 ${block.toggle ? "bg-black/50" : "bg-white/50"}`
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        );

    
}


