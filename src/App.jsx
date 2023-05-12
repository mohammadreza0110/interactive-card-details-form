import "./App.css";
import desktopBackgroundImage from "./assets/images/bg-main-desktop.png";
import mobileBackgroundImage from "./assets/images/bg-main-mobile.png";
import frontCard from "./assets/images/bg-card-front.png";
import backCard from "./assets/images/bg-card-back.png";
import FormSection from "./components/FormSection";

function App() {
  return (
    <main className="relative h-screen lg:flex">
      <section className="lg:w-1/3">
        <img
          className="fixed hidden w-1/4 h-screen lg:block"
          src={desktopBackgroundImage}
          alt="bg-main-desktop"
        />

        <img
          className="lg:hidden m-auto w-full h-[240px] mb-16"
          src={mobileBackgroundImage}
          alt="bg-main-desktop"
        />

        <img
          className="absolute h-[157px] left-[50%] translate-x-[-50%] lg:translate-x-0 -ml-4 lg:ml-auto top-32 lg:left-[8%] lg:top-[14%] lg:h-[34%] z-50"
          src={frontCard}
          alt="front-Card"
        />

        <img
          className="absolute h-[157px] left-[50%] translate-x-[-50%] lg:translate-x-0 ml-4 lg:ml-auto top-8 lg:top-auto lg:left-[13%] lg:bottom-[14%] lg:h-[34%]"
          src={backCard}
          alt="back-card"
        />
      </section>

      <section className="lg:w-2/3">
        <FormSection />
      </section>
    </main>
  );
}

export default App;
