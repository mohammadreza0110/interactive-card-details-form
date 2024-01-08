import "./App.css";
import FormSection from "./components/FormSection";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";
import { useState } from "react";

function App() {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    year: "",
    month: "",
    CVC: "",
  });

  return (
    <main className="relative h-dvh 2xl:flex">
      <section className="2xl:w-1/3">
        <div className="fixed hidden w-1/4 h-screen 2xl:block backImage_gradient"></div>

        <div className="2xl:hidden m-auto w-full h-[280px] mb-16 backImage_gradient"></div>

        <div className="absolute mt-10 xl:mt-0 h-fit inset-0 2xl:inset-auto 2xl:top-[50%] 2xl:translate-y-[-50%] ">
          <FrontCard
            name={cardInfo.name}
            cardNumber={cardInfo.number}
            year={cardInfo.year}
            month={cardInfo.month}
          />

          <BackCard CVC={cardInfo.CVC} />
        </div>
      </section>

      <section className="2xl:w-2/3">
        <FormSection setCardInfo={setCardInfo} />
      </section>
    </main>
  );
}

export default App;
