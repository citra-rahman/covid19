"use client"
import Image from "next/image";
import { menuList } from "@/data";

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
                <a target="_blank" href="https://www.facebook.com/">
                    <Image alt={"facebook"} src="/1.svg" width={10} height={10} />
                </a>
                <a target="_blank" href="https://www.youtube.com/">
                    <Image alt={"youtube"} src="/2.svg" width={15} height={15} />
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                    <Image alt={"vimeo"} src="/3.svg" width={15} height={15} />
                </a>
                <a target="_blank" href="https://www.twitter.com/">
                    <Image alt={"twiiter"} src="/4.svg" width={15} height={15} />
                </a>
            </div>
        </div>
    )
}