"use client"
import React, { useState } from "react";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/gallery1.avif",
    "/gallery2.png",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpg",
    "/gallery6.jpg",
    "/gallery7.jpg",
    "/gallery8.webp",
    "/gallery9.jpg",
  ];

  return (
    <>
      <section className="gallery-main">

        {/* HERO */}
        <div className="gallery-hero">
          <div className="gallery-overlay"></div>
          <h2>Our Gallery</h2>
        </div>

        {/* GRID */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div 
              className="gallery-card" 
              key={index}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`gallery-${index}`} />
            </div>
          ))}
        </div>

        {/* LIGHTBOX */}
        {selectedImg && (
          <div className="lightbox">
            <span 
              className="close-btn"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </span>

            <img 
              src={selectedImg} 
              alt="preview"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Click outside to close */}
            <div 
              className="lightbox-bg"
              onClick={() => setSelectedImg(null)}
            ></div>
          </div>
        )}

      </section>

      <div className="admission-bottom text-center">
        GROWING WITH EXCELLENCE <br />
        STRONG FOUNDATIONS START HERE
      </div>

      <br /><br />

      <Form />
      <Footer />
    </>
  );
};

export default Gallery;