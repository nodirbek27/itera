const Services = () => {
  return (
    <section id="services" className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Xizmatlarimiz</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="p-6 shadow-lg rounded-lg border">
            <h4 className="text-xl font-semibold">Veb-sayt yaratish</h4>
            <p className="text-gray-600">Zamonaviy va responsiv saytlar.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border">
            <h4 className="text-xl font-semibold">CRM tizimlar</h4>
            <p className="text-gray-600">
              Biznesingiz uchun maxsus CRM yechimlari.
            </p>
          </div>
          <div className="p-6 shadow-lg rounded-lg border">
            <h4 className="text-xl font-semibold">Mobil ilovalar</h4>
            <p className="text-gray-600">
              Android va iOS uchun kuchli ilovalar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
