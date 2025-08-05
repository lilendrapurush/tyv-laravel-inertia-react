const Retreats = () => {
  return (
    <section id="retreats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Upcoming Retreats</h2>
          <p className="mt-4 text-lg text-black">Immerse yourself in sacred spaces for transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-deep-red">
            <img src="https://picsum.photos/600/400?random=7" alt="Nepal Retreat" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Nepal Tantra Retreat</h3>
              <p className="mt-2 text-black">Dec 15-20, 2025 • Kathmandu, Nepal</p>
              <a href="#" className="mt-4 inline-block btn-primary font-semibold py-2 px-4 rounded-md transition-transform hover:scale-105">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retreats;