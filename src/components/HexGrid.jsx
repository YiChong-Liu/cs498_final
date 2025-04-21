// src/components/HexGrid.jsx
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import ThreadByUser from './ThreadByUser';

const features = [
  { id: 'thread', label: 'Thread by User', component: <ThreadByUser />, input: true },
  { id: 'country', label: 'Most Active Country', component: <ThreadByUser />, input: false },
  { id: 'user', label: 'Most Active User', component: <ThreadByUser />, input: false },
  { id: 'hashtags', label: 'Top Hashtags', component: <ThreadByUser />, input: true },
  { id: 'cycles', label: 'User Reply Cycles', component: <ThreadByUser />, input: false },
  { id: 'engagement', label: 'Verified Engagement', component: <ThreadByUser />, input: false },
];

export default function HexGrid() {
  const [activeCard, setActiveCard] = useState(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - 1);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div style={{ padding: '2rem', boxSizing: 'border-box', height: '100vh', overflow: 'hidden', marginTop: '0' }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '1rem' , marginTop: '0'}}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Eurovision Tweet Dashboard</h1>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', height: 'calc(100% - 5rem)' }}>
        <div style={{ flex: '0 0 auto', padding: '1rem', boxSizing: 'border-box' }}>
          <div className="rotating-hexagon-outer">
            <div className="rotating-hexagon" style={{ transform: `rotate(${rotation}deg)` }}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="hex-card-wrapper"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-200px)`
                  }}
                  onClick={() => handleCardClick(feature.id)}
                >
                  <div style={{ transform: `rotate(${-rotation - index * 60}deg)` }}>
                    <FeatureCard
                      label={feature.label}
                      active={activeCard === feature.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {activeCard && (
          <div className="feature-detail" style={{ flex: '1 1 auto', marginLeft: '2rem', overflowY: 'auto' }}>
            {features.find((f) => f.id === activeCard)?.component}
          </div>
        )}
      </div>

      <style>{`
        .rotating-hexagon-outer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px;
          height: 500px;
          overflow: visible;
          position: relative;
        }
        .rotating-hexagon {
          position: relative;
          width: 0;
          height: 0;
          transition: transform 0.1s linear;
          transform-origin: center center;
        }
        .hex-card-wrapper {
          position: absolute;
          transform-origin: center center;
          transition: transform 0.5s ease;
        }
        .feature-detail {
          padding: 2rem;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 8px;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
