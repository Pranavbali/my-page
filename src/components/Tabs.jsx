import React, { useState } from 'react';
import '../styles/Tabs.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="tabs-widget">
      <div className="tabs-container">
        <div className="tabs">
          <button
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={activeTab === 'experience' ? 'active' : ''}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={activeTab === 'recommend' ? 'active' : ''}
            onClick={() => setActiveTab('recommend')}
          >
            Recommend
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'about' && (
            <p>
              Hello! I’m Pranav, your Full Stack Developer. I’ve been working at this awesome company for 3 years now. <br /><br />
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
            </p>
          )}
          {activeTab === 'experience' && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum, lorem vitae lacinia tincidunt, nunc urna viverra eros, eget viverra libero nunc a lorem. Duis vehicula, dolor at iaculis lacinia, felis felis tempus urna, eget auctor justo eros et erat. Sed nec bibendum purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin malesuada massa quis eros ullamcorper, sed aliquet ex hendrerit. Fusce eu risus viverra, ultricies sapien id, sollicitudin justo. Aenean fringilla sit amet felis in aliquet. Nullam egestas erat ut justo luctus, sed ultrices orci interdum. <br /><br />
            </p>
          )}
          {activeTab === 'recommend' && (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum, lorem vitae lacinia tincidunt, nunc urna viverra eros, eget viverra libero nunc a lorem. Duis vehicula, dolor at iaculis lacinia, felis felis tempus urna, eget auctor justo eros et erat. Sed nec bibendum purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin malesuada massa quis eros ullamcorper, sed aliquet ex hendrerit. Fusce eu risus viverra, ultricies sapien id, sollicitudin justo. Aenean fringilla sit amet felis in aliquet. Nullam egestas erat ut justo luctus, sed ultrices orci interdum. <br /><br />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
