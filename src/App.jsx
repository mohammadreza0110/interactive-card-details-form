import "./App.css";
import FormSection from "./components/FormSection";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

function App() {
  return (
    <main className="relative h-screen 2xl:flex">
      <section className="2xl:w-1/3">
        <div className="fixed hidden w-1/4 h-screen 2xl:block backImage_gradient"></div>

        <div className="2xl:hidden m-auto w-full h-[280px] mb-16 backImage_gradient"></div>

        <div className="absolute mt-10 inset-0 2xl:inset-auto 2xl:top-[50%] 2xl:translate-y-[-50%] ">
          <FrontCard />

          <BackCard />
        </div>
      </section>

      <section className="2xl:w-2/3">
        <FormSection />
      </section>
    </main>
  );
}

export default App;
