import React from 'react';
import { Head } from '@inertiajs/react';


// Import components from parts directory
import Header from '../components/parts/Header';
import Hero from '../components/parts/Hero';
import FeaturedResources from '../components/parts/FeaturedResources';
import FeaturedCourses from '../components/parts/FeaturedCourses';
import Retreats from '../components/parts/FeaturedRetreats';
import BlogPosts from '../components/parts/FeaturedBlogPosts';
import Community from '../components/parts/CTA_HomePage';
import Footer from '../components/parts/Footer';

const Index = () => {
  return (
    <>
      <Head title="Tantra Yoga Vidya - Home" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Featured Resources */}
      <FeaturedResources />

      {/* Featured Courses */}
      <FeaturedCourses />

      {/* Retreats */}
      <Retreats />

      {/* Blog Posts */}
      <BlogPosts />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;