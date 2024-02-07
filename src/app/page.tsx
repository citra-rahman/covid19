import Image from "next/image";
import { Button } from "@/components/ui/button";
import ItemCard from "@/components/item-card";
import { cardData, preventData } from "@/data";

export default function Home() {
  return (
    <div>
      <section id="overview" className="flex flex-row justify-center">
        <div className="flex flex-col gap-2 flex-nowrap justify-center min-w-[45vw] pl-[5vw]">
          <div>
            <span className="text-[2.5vw] text-red-400 font-bold">COVID-19 Alert</span>
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
              Let Us Help
            </Button>
          </div>
        </div>
        <div className="min-w-[55vw]">
          <Image
            alt="ilustration"
            src="/ilustration.png"
            loading='lazy'
            width={2000}
            height={2000} />
        </div>
      </section>
      <section id="contagion" className="flex flex-col justify-center pt-8">
        <div className="flex flex-row justify-start item-start">
          <div className="min-w-[55vw]">
            <Image
              alt="contagion1"
              src="./contagion1.svg"
              loading='lazy'
              width={1000}
              height={1000} />
          </div>
          <div className="flex flex-col min-w-[45vw] justify-center p-8">
            <span className="text-[2.4vw] text-red-400 font-bold">What is Covid-19</span>
            <span className="text-[2.2vw] font-bold">CoronaVirus</span>
            <p className="text-[1.4vw] leading-[2em]">Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And
              Some Cause Disease. A Newly Identified Type Has Caused A Recent
              Outbreak Of Respiratory Illness Now Called COVID-19.Lauren Sauer, M.S.,
              The Director Of Operations With The Johns Hopkins Office Of Critical Event
              Preparedness And Response</p>
            <div className="pt-4">
              <Button
                variant={"default"}
                className="rounded-full text-[1.2vw] text-red-400 bg-red-100"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center item-center">
          <span className="text-center text-bold text-[#FB4C47] text-[2vw]">Covid-19</span>
          <span className="text-center text-bold text-[2.4vw] pt-1">Contagion</span>
          <div className="flex flex-col justify-center pt-2">
            <span className="text-center text-bold text-[1vw]">Corona viruses are a type of virus.</span>
            <span className="text-center text-bold text-[1vw]">There are many different kinds, and some cause disease. A newly identified type</span>
          </div>
          <div className="flex flex-row justify-center item-center pt-10">
            {
              cardData.map((item, index) =>
                <ItemCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  imgPath={item.imgPath} />
              )
            }
          </div>
        </div>
      </section>
      <section id="symptoms" className="flex flex-col justify-center item-center pt-8">
        <span className="text-center text-bold text-[#FB4C47] text-[2vw]">Covid-19</span>
        <span className="text-center text-bold text-[2.4vw] pt-1">Symptoms</span>
        <div className="flex flex-col justify-center pt-2">
          <span className="text-center text-bold text-[1vw]">
            Corona viruses are a type of virus. There are many different kinds, and some cause disease.
          </span>
          <span className="text-center text-bold text-[1vw]">
            A newly identified type has caused a recent outbreak of respiratory
          </span>
        </div>
        <Image
          alt="symptoms"
          src="./symptoms.svg"
          loading="lazy"
          width={800}
          height={800}
          className="m-auto px-10"
        />
      </section>
      <section id="prevention" className="flex flex-col justify-center item-center pt-8">
        <span className="text-center text-bold text-[#FB4C47] text-[2vw]">Covid-19</span>
        <span className="text-center text-bold text-[2.4vw] pt-1">What Should We Do</span>
        <div className="flex flex-col justify-center pt-2">
          <span className="text-center text-bold text-[1vw]">
            Corona viruses are a type of virus. There are many different kinds, and some cause
          </span>
          <span className="text-center text-bold text-[1vw]">
            disease. A newly identified type has caused
          </span>
          {
            preventData.map((data, index) =>
              ((index % 2) === 1) ? <div key={index} className="flex flex-row justify-center item-center pt-8">
                <div className="flex flex-row justify-start m-auto">
                  <div className="mt-2">
                    <span className="text-red-400 text-[2vw] text-center bg-red-100 rounded-full w-[4vw] h-[4vw] p-[1vw]">{data.id}</span>
                  </div>
                  <div className="flex flex-col m-2">
                    <span className="text-[2.2vw]">{data.name}</span>
                    <span className="max-w-[25vw] text-[1vw] pt-[1vh]">{data.description}</span>
                  </div>
                </div>
                <div className="max-w-[50vw] px-[6vw]">
                  <Image
                    alt={data.name}
                    loading="lazy"
                    src={String(data.imgPath)}
                    width={500}
                    height={500}
                    className="m-auto"
                  />
                </div>
              </div> :
                <div key={index} className="flex flex-row justify-center item-center pt-8">
                  <div className="max-w-[50vw] px-[6vw]">
                    <Image
                      alt={data.name}
                      loading="lazy"
                      src={String(data.imgPath)}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-row justify-start m-auto">
                    <div className="mt-2">
                      <span className="text-red-400 text-[2vw] text-center bg-red-100 rounded-full w-[4vw] h-[4vw] p-[1vw]">{data.id}</span>
                    </div>
                    <div className="flex flex-col m-2">
                      <span className="text-[2.2vw]">{data.name}</span>
                      <span className="max-w-[25vw] text-[1vw] pt-[1vh]">{data.description}</span>
                    </div>
                  </div>
                </div>
            )
          }
        </div>
      </section>
    </div>
  );
}
