import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Footer, Header} from './components';
import { ContactPage, FaqPage, HomePage, PageNotFound, ProductsPage } from './pages';




export default function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ProductsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  );
}

