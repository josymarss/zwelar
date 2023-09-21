"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Tabs, Tab, Accordion, AccordionItem } from "@nextui-org/react";

function DetailCOurse() {
  const router = useRouter();
  // const { data } = router.query;

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center font-mulish mt-20">
      {/* <p className="text-3xl font-bold text-slate-600">{"data"}</p> */}
      <div className="flex w-full flex-col items-center mt-5">
        <Tabs aria-label="Options" color="primary" variant="bordered">
          <Tab
            key="Gramática"
            title={
              <div className="flex items-center space-x-2">
                {/* <GalleryIcon/> */}
                <span>Gramática</span>
              </div>
            }
          >
            <div className="bg-red-50 w-full">
              <p>All info come here!</p>
            </div>
          </Tab>
          <Tab
            key="Música"
            title={
              <div className="flex items-center space-x-2">
                {/* <MusicIcon/> */}
                <span>Música</span>
              </div>
            }
          />
          <Tab
            key="Vídeos"
            title={
              <div className="flex items-center space-x-2">
                {/* <VideoIcon/> */}
                <span>Vídeos</span>
              </div>
            }
          >
            <div className="flex items-center justify-center w-full">
              <div className="w-[90%] grid grid-cols-4 place-items-center self-center gap-5 justify-center  rounded-md">
                <video controls src="/01.mp4" className="col-span-3 rounded-md">
                  <source src="/01.mp4" type="video/mp4" />
                </video>
                <div className="flex flex-col gap-2 w-full h-full rounded-md p-2 bg-slate-50">
                  <div className="flex gap-2 flex-col">
                    {[1, 2, 3, 4, 5, 6].map(( key, item) => (
                      <Accordion key={key}>
                        <AccordionItem
                          key="1"
                          title="Fundamentos do Kimbundu"
                          className=" p-1"
                        >
                          <p className=" p-3 rounded-md font-medium">
                            Aula 1: Introdução ao alfabeto Kimbundu e sons da
                            língua.
                          </p>
                          <p className=" p-3 rounded-md font-medium">
                            Aula 2: Saudações e frases básicas de cortesia.
                          </p>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
export default DetailCOurse;
