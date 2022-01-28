import React from 'react';
import './App.css';
import { Footer, Header, HomeSection, BannerSection, CategorySection, ProductSection, DealSection, ContactForm, SubscribeSection } from './components';
// import DealSection from './components/deal';


export default function App() {
  return (
    <>
      <Header />

      <HomeSection />
      <BannerSection />
      <CategorySection />
      <ProductSection />
      <DealSection />
      <ContactForm />
      <SubscribeSection />

      <Footer />
    </>
  );
}

