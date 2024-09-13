import React from 'react';
import Tabs from './Tabs';
import Gallery from './Gallery';
import '../styles/RightContainer.css';

const RightContainer = () => {
  return (
    <div className="right-container">
      <div className="tabs-widget">
        <Tabs />
      </div>
      <div className="gallery-widget">
        <Gallery />
      </div>
    </div>
  );
};

export default RightContainer;
