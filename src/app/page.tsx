import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-2 flex-nowrap justify-center min-w-[45vw] pl-[5vw]">
          <div>
            <span className="text-[2.5vw] text-red-400 font-bold">Covid-19 Alert</span>
          </div>
          <div>
            <span className="text-[2.8vw] font-bold">Stay At Home Quarantine To Stop Corona Virus</span>
          </div>
          <div className="items-start">
            <span className="text-[1.5vw]">There is No Specific Medicine To Prevent Or Treat Coronavirus Disease (COVID-19).
              People May Need Supportive Care to.
            </span>
          </div>
          <div>
            <Button
              variant={"default"}
              className="p-6 rounded-full text-white text-[1.2vw] bg-[#FB4C47]"
            >
              Let us Help
            </Button>
          </div>
        </div>
        <div className="min-w-[55vw]"><Image alt="ilustration" src="/ilustration.png" width={2000} height={2000}/></div>
      </div>
    </div>
  );
}
