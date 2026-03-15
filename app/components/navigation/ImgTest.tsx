"use client";
import * as React from "react";
import Image from "next/image";
import Img1 from "@/app/images/img-1.jpg";
import Img2 from "@/app/images/img-2.jpg";
import Img3 from "@/app/images/img-3.jpg";
import Img4 from "@/app/images/img-4.jpg";
import Img5 from "@/app/images/img-5.jpg";


//array of images 

const Images = [
    {  title: "img1", url: Img1, id: 0  },
    {  title: "img2", url: Img2, id: 1  },
    {  title: "img3", url: Img3, id: 3  },
    {  title: "img4", url: Img4, id: 4  },
    {  title: "img5", url: Img5, id: 5  },
]

export default function ImgTest() {
    // make the default state 
    const [openItem, setOpenItem] = React.useState<string>("");
    // make active item to match the id to the state 
    const activeItem = Images.find((item) => String(item.id) === openItem);
    console.log("openItem:", openItem);
console.log("activeItem:", activeItem);
    return (
        <div onMouseLeave={() => setOpenItem("")}>
            {/* large img */}
            <div className="border-2 border-solid w-[400px] h-[400px]">
                    <div>
                        
                        {activeItem && (
                    <Image
                    src={activeItem.url}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    />
                )}
                    </div>
            </div>
            {/* thumbnail images */}
                <div className="flex gap-4">
                    {/* map the images */}
                    {Images.map((item) => {
                        // assign key 
                        const key = String(item.id);
                        // return the images 
                        return (
                            <Image key={item.id} onMouseEnter={() => {setOpenItem(key)}} className="border-2 border-solid w-[100px] h-[100px] object-cover" src={item.url} alt="string" />
                        )
                    })}
                </div>
        </div>
    )
}