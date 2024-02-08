"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { menuList } from "@/data";

export default function Navbar() {

    return (
        <div className="w-full h-full flex flex-row justify-start gap-2 items-center">
            <div className="w-[20vw] min-w-[20vw] px-[2vw]">
                <a className="" href="/">
                    <div className="flex">
                        <Image
                            src="/Logo.svg"
                            alt="logo"
                            height={150}
                            width={300}
                            className="inline mr-2"
                        />
                    </div>
                </a>
            </div>
            <div className="flex-1 flex justify-center items-center gap-1">
                {
                    menuList.map((item, index) =>
                        <div key={index} className="flex flex-col items-center py-2">
                            <a
                                id={`${index}`}
                                key={index}
                                href={`#${item}`}
                                className="text-[1.2vw] font-medium hover:text-red-400 focus:text-red-400 w-[8vw]"
                            >{item}</a>
                        </div>
                    )
                }
                <Button
                    variant={"outline"}
                    size={"default"}
                    className=" border-red-400 rounded-full text-red-400 text-[1.2vw] hover:bg-red-400 hover:text-white"
                >
                    Contact
                </Button>
            </div>
        </div>
    )
}