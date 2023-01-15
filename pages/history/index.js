import { useEffect, useState } from "react";
import { fakedata } from "./fakedata";

export default function History() {
  const [history, setHistory] = useState();

  useEffect(() => {
    console.table(fakedata);
  }, []);

  return (
    <div className="">
      <div className="grid lg:grid-cols-4">
        {/* History and translation, the main history  */}
        <aside className="col-span-3 p-5">
          <input
            name=""
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => onSearchText(e.target.value)}
            className="w-96 rounded-full p-3 boder-none border-gray-200"
          />
          <div className="flex space-between gap-7">
            <div className="">
              <h2 className="font-semibold text-4xl mt-4">
                {fakedata[0] ? fakedata[0].title : ""}
              </h2>
              <p className="text-justify text-xl mt-3 w-[500px]">
                {fakedata[0] ? fakedata[0].lyric : ""}
              </p>
            </div>

            {/*  */}
            <div className="">
              <h2 className="font-semibold text-4xl mt-4">
                {" "}
                {fakedata[0] ? fakedata[0].titleTranslation : ""}
              </h2>
              <p className="text-justify text-xl mt-3 w-[500px]">
                {fakedata[0] ? fakedata[0].translation : ""}
              </p>
            </div>
          </div>
        </aside>
        {/* a list of history */}
        <aside className="col-span-1 p-5 m-7">
            <h2 className="font-semibold text-xl">Relacionados</h2>
            <article className="flex flex-col gap-3">
                {fakedata.map((music,index) => 
                   <div className="bg-white shadow p-10 mt-3" key={index}>{music.titleTranslation}</div>
                )}
            </article>
        </aside>
      </div>
    </div>
  );
}
