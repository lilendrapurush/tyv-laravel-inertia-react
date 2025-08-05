const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/1920/1080')"}}>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-shadow">Ancient Wisdom for Modern Transformation</h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white">Explore the authentic teachings of Tantra, Yoga, and Sanatana Dharma to unlock your true potential and find inner harmony.</p>
        <div className="mt-10 flex justify-center items-center space-x-4">
          <a href="#courses" className="btn-primary font-bold py-3 px-8 rounded-md text-lg transition-transform hover:scale-105">Explore Courses</a>
          <a href="#community" className="btn-secondary font-bold py-3 px-8 rounded-md text-lg border-0 transition-transform hover:scale-105">Join Community</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;