const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Begin Your Journey</h2>
          <p className="mt-4 text-lg text-black">Curated courses to guide you from foundational principles to deeper practices.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img src="https://picsum.photos/600/400?random=4" alt="Yoga Philosophy Course" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Foundations of Yoga Philosophy</h3>
              <p className="mt-2 text-black">Understand the core tenets of Yogic thought beyond the physical postures.</p>
              <a href="#" className="mt-4 inline-block btn-secondary font-semibold py-2 px-4 rounded-md transition-transform hover:scale-105">Enroll Free</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img src="https://picsum.photos/600/400?random=5" alt="Tantra Introduction" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Introduction to Tantra</h3>
              <p className="mt-2 text-black">Demystify Tantra and explore its rich history and transformative potential.</p>
              <a href="#" className="mt-4 inline-block btn-primary font-semibold py-2 px-4 rounded-md transition-transform hover:scale-105">Enroll Now</a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img src="https://picsum.photos/600/400?random=6" alt="Meditation Techniques" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-black">Authentic Meditation Techniques</h3>
              <p className="mt-2 text-black">Learn powerful meditation practices rooted in the ancient traditions.</p>
              <a href="#" className="mt-4 inline-block btn-primary font-semibold py-2 px-4 rounded-md transition-transform hover:scale-105">Enroll Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;