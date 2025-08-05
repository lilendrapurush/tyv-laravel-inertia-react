const BlogPosts = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">From Our Blog</h2>
          <p className="mt-4 text-lg text-black">Insights, articles, and wisdom to support your spiritual path.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden card-hover border border-gray-200">
            <img src="https://picsum.photos/600/400?random=8" alt="Dharma Meaning" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-black">PHILOSOPHY</span>
              <h3 className="mt-2 text-xl font-bold text-black">What is Dharma? Understanding Your Path</h3>
              <p className="mt-2 text-black">A deep dive into one of the most foundational concepts in Sanatana Dharma.</p>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">Read Article &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden card-hover border border-gray-200">
            <img src="https://picsum.photos/600/400?random=9" alt="Chakras Explained" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-black">ENERGY WORK</span>
              <h3 className="mt-2 text-xl font-bold text-black">The 7 Chakras: An Introduction</h3>
              <p className="mt-2 text-black">Explore the energy centers within the body and how they influence your well-being.</p>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">Read Article &rarr;</a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden card-hover border border-gray-200">
            <img src="https://picsum.photos/600/400?random=10" alt="Guru-Disciple Relationship" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-black">TRADITION</span>
              <h3 className="mt-2 text-xl font-bold text-black">The Sacred Guru-Disciple Relationship</h3>
              <p className="mt-2 text-black">Why the bond between a teacher and student is paramount in spiritual transmission.</p>
              <a href="#" className="mt-4 inline-block text-deep-orange font-semibold hover:underline">Read Article &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;