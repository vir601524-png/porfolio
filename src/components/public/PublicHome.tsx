import heroNebula from '../../assets/images/hero_nebula_background_1793707989447.jpg';

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center p-6">
        <img 
          src={heroNebula}
          alt="Nebula background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-[#050505]/40 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4">Virginia Galindo de Benito</h1>
          <p className="text-2xl text-slate-300 mb-8">Exploring possibilities. Creating the future.</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition">Descubre mi perfil</button>
            <button className="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-full transition">Contactar</button>
          </div>
        </div>
      </section>
    </div>
  );
}
