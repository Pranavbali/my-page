import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1725793870057-7bc3ba446336?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1725908475743-138ffa142cd4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1724093121148-ec407f45e44c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1725714835081-118a2b0456b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1725588379392-7a56d6eff9ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D',
  ]);
  const [startIndex, setStartIndex] = useState(0);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
    }
  };

  const nextImages = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const prevImages = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className="gallery-container">
      <button className="add-image-btn">
        <label htmlFor="file-upload" className="file-upload-label">
          Add Image
        </label>
      </button>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />

      <div className="image-gallery">
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Gallery Img ${index}`} />
        ))}
      </div>

      <div className="gallery-navigation">
        <button onClick={prevImages} disabled={startIndex === 0}>
          Previous
        </button>
        <button onClick={nextImages} disabled={startIndex + 3 >= images.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
