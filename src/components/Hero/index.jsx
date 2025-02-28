import heroImg from "../../assets/images/hero1.webp";
import { ContactButton, CallButton } from "./styled.js";

const HeroSection = () => {
  return (
    <header
      className="h-screen text-white flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <h2 className="text-5xl font-bold mb-4">
        IT Xizmatlaringiz Uchun Mukammal Yechim
      </h2>
      <p className="text-lg max-w-2xl">
        Itera – biznesingizni rivojlantirish uchun sifatli IT xizmatlarini
        taqdim etuvchi kompaniya.
      </p>
      <div className="flex items-center gap-3 mt-6">
        <ContactButton
          href="#contact"
          className=""
        >
          Bog`lanish
          
        </ContactButton>
        <CallButton
          href="#contact"
          className=""
        >
          Qo`ng`iroq
        </CallButton>
      </div>
    </header>
  );
};

export default HeroSection;
