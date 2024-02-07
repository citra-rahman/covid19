"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const menuList = [
    "Overview", "Contagion", "Symptoms", "Prevention"
]
export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [keyMenu, setkeyMenu] = useState(0);

    const menuOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.currentTarget.getAttribute("id"));
    }
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
            <div className="flex-1 flex justify-center items-center">
                {
                    menuList.map((item, index) =>
                        <div key={index} className="flex flex-col items-center py-2">
                            <Button
                                id={`${index}`}
                                key={index}
                                className="text-[1.2vw] hover:text-red-400 active:text-red-400"
                                onClick={(e) => menuOnClick(e)}
                            >{item}</Button>
                            {
                                menuActive &&
                                <span id={`${index}`} className="h-2 w-2 bg-red-400 rounded-full" />
                            }
                        </div>
                    )
                }
                <Button
                    variant={"outline"}
                    className="p-4 border-2 border-red-400 rounded-full hover:bg-red-400"
                >
                    <span className="text-red-400 text-[1.2vw] hover:text-white">Contact</span>
                </Button>
            </div>
        </div>
    )
}