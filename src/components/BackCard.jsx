import React from "react";

export default function BackCard() {
  return (
    <section className="absolute 2xl:static translate-x-[-50%] left-[50%] ml-4 bg-slate-300 xl:py-7 py-4 w-[300px] xl:w-[500px] rounded-lg 2xl:translate-x-64 xl:ml-auto 2xl:h-[280px]">
      <div className="w-full h-12 bg-black xl:h-20"></div>
      <div className="xl:w-[420px] px-6 m-auto">
        <div className="xl:p-3 p-2.5 text-right text-white rounded-md xl:mb-9 mt-5 xl:mt-7 bg-slate-400 mb-10">
          000
        </div>

        <div className="flex-col hidden m-auto xl:flex xl:w-6/12 gap-y-2">
          <div className="flex gap-x-2">
            <span className="w-56 h-1 rounded-full bg-slate-400"></span>
            <span className="w-16 h-1 rounded-full bg-slate-400"></span>
            <span className="w-16 h-1 rounded-full bg-slate-400"></span>
            <span className="w-5 h-1 rounded-full bg-slate-400"></span>
          </div>
          <div className="flex w-9/12 m-auto gap-x-2">
            <span className="h-1 rounded-full w-28 bg-slate-400"></span>
            <span className="h-1 rounded-full w-52 bg-slate-400"></span>
            <span className="h-1 rounded-full w-44 bg-slate-400"></span>
            <span className="h-1 rounded-full w-14 bg-slate-400"></span>
          </div>
          <div className="flex gap-x-2">
            <span className="w-5 h-1 rounded-full bg-slate-400"></span>
            <span className="w-16 h-1 rounded-full bg-slate-400"></span>
            <span className="w-16 h-1 rounded-full bg-slate-400"></span>
            <span className="w-56 h-1 rounded-full bg-slate-400"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
