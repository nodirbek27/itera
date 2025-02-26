import heroImg from "../../assets/images/hero.webp";

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
      <a
        href="#contact"
        className="mt-6 bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-blue-700"
      >
        Biz bilan bog‘laning
      </a>
    </header>
  );
};

export default HeroSection;
