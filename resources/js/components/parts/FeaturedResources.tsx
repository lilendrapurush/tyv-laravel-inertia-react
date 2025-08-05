const FeaturedResources = () => {
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Featured Resources</h2>
          <p className="mt-4 text-lg text-black">Discover foundational teachings, practices, and sacred texts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-deep-red">
            <img src="https://picsum.photos/600/400?random=1" alt="Sacred Hymns" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Hymns</h3>
              <p className="mt-2 text-black">Sacred chants and prayers for daily practice.</p>
              <span className="mt-4 inline-block bg-deep-green text-white px-3 py-1 rounded-full text-sm">Free</span>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">View Resource &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-deep-red">
            <img src="https://picsum.photos/600/400?random=2" alt="Powerful Mantras" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Mantras</h3>
              <p className="mt-2 text-black">Powerful syllables for meditation.</p>
              <span className="mt-4 inline-block bg-golden text-gray-800 px-3 py-1 rounded-full text-sm">Donation</span>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">View Resource &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover border border-deep-red">
            <img src="https://picsum.photos/600/400?random=3" alt="Ancient Texts" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Texts</h3>
              <p className="mt-2 text-black">Ancient scriptures and commentaries.</p>
              <span className="mt-4 inline-block bg-deep-red text-white px-3 py-1 rounded-full text-sm">Paid</span>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">View Resource &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResources;