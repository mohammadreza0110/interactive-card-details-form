import React from "react";

export default function FrontCard() {
  return (
    // lg:-translate-x-10
    <section className="absolute 2xl:static card_gradient p-5 xl:p-10 w-[300px] xl:w-[500px] rounded-lg -ml-4 translate-x-[-50%] left-[50%] 2xl:translate-x-40 mb-10 2xl:ml-auto top-32 z-50">
      <div className="relative h-full">
        <div className="flex items-center gap-x-4 xl:gap-x-6">
          <div className="w-10 h-10 bg-white rounded-full xl:w-16 xl:h-16"></div>
          <div className="w-5 h-5 border border-white rounded-full xl:w-7 xl:h-7"></div>
        </div>
        <div className="pt-8">
          <div className="flex pb-4 text-2xl text-white xl:text-4xl gap-x-2 xl:gap-x-4">
            <span>0000</span>
            <span>0000</span>
            <span>0000</span>
            <span>0000</span>
          </div>
          <div className="flex justify-between">
            <div className="text-white">JANE APPLESEED</div>
            <div className="text-white">00/00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
