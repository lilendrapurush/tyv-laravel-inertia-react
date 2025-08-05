import Layout from './Layout';
import Hero from '../components/parts/Hero';
import FeaturedResources from '../components/parts/FeaturedResources';
import FeaturedCourses from '../components/parts/FeaturedCourses';
import FeaturedBlogPosts from '../components/parts/FeaturedBlogPosts';
import FeaturedRetreats from '../components/parts/FeaturedRetreats';
import CTA_HomePage from '../components/parts/CTA_HomePage';
import React from 'react';
export default function BlogIndex() {
  return (
    
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <Hero />               
      </section>
      
      {/* Featured Resources*/}
      <section className="py-8 bg-white">
        <FeaturedResources />
      </section>
      
      {/* Featured Courses */}
      <section className="py-12 bg-white">
        <FeaturedCourses />
      </section>     

      {/* Featured Retreats */}
      <section className="py-12 bg-gray-50">
        <FeaturedRetreats />
      </section>

      {/* Featured Blog Posts */}
      <section className="py-12 bg-gray-50">
        <FeaturedBlogPosts />
      </section>

      {/* Community CTA */}
      <section className="py-12 bg-gray-50">
        <CTA_HomePage />
      </section>



    </Layout>
  );
}