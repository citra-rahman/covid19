"use client"
import Image from "next/image";
import { menuList, mediaSocial } from "@/data";

export default function FooterNavBar() {
    return (
        <div className="flex flex-row justify-between item-center">
            <div className="w-[20vw] min-w-[20vw] px-[2vw] py-[2v]">
                <a className="" href="/">
                    <Image
                        src="/logo-footer.svg"
                        alt="logo"
                        height={70}
                        width={150}
                        className="inline mr-2"
                    />
                </a>
            </div>
            <div className="flex justify-center items-center gap-1">
                {
                    menuList.map((item, index) =>
                        <div key={index} className="flex flex-col items-center py-2">
                            <a
                                id={`${index}`}
                                key={index}
                                href={`#${item}`}
                                className="text-[1vw] hover:text-red-400 focus:text-red-400 w-[8vw]"
                            >{item}</a>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-center items-center gap-[1em]">
                {
                    mediaSocial.map((item, index) =>
                        <a key={index} target="_blank" href={item.url}>
                            <Image alt={item.name} src={item.imgPath} width={10} height={10} />
                        </a>
                    )
                }
            </div>
        </div>
    )
}