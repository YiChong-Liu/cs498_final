import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import ThreadByUser from './ThreadByUser';
import MostActiveCountry from './MostActiveCountry';

const features = [
  { id: 'thread', label: 'Thread by User', component: <ThreadByUser />, input: true },
  { id: 'country', label: 'Most Active Country', component: <MostActiveCountry />, input: false },
  { id: 'user', label: 'Most Active User', component: <ThreadByUser />, input: false },
  { id: 'hashtags', label: 'Top Hashtags', component: <ThreadByUser />, input: true },
  { id: 'cycles', label: 'User Reply Cycles', component: <ThreadByUser />, input: false },
  { id: 'engagement', label: 'Verified Engagement', component: <ThreadByUser />, input: false },
];

export default function HexGrid() {
  const [activeCard, setActiveCard] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotation(prev => prev - 1);
    }, 100);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div style={{
      padding: '2rem',
      boxSizing: 'border-box',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f0f2f5 0%, #d9e2ec 100%)',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
          Eurovision Tweet Dashboard
        </h1>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 'calc(100% - 6rem)',
      }}>
        {/* 左边旋转组件 */}
        <div style={{ flex: '0 0 auto', width: '500px', height: '500px', marginRight: '2rem' }}>
          <div
            className="rotating-hexagon-outer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="rotating-hexagon" style={{ transform: `rotate(${rotation}deg)` }}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="hex-card-wrapper"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(-180px)`
                  }}
                  onClick={() => handleCardClick(feature.id)}
                >
                  <div style={{ transform: `rotate(${-rotation - index * 60}deg)` }}>
                    <FeatureCard label={feature.label} active={activeCard === feature.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右边固定大小的外壳 */}
        <div style={{
          flex: '0 0 720px',
          height: '500px',
          background: 'linear-gradient(to top left, #ffffff, #f7f9fc)',
          borderRadius: '16px',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.5s ease'
        }}>
          {activeCard && (
            <div style={{ width: '100%', padding: '2rem', overflowY: 'auto' }}>
              {features.find((f) => f.id === activeCard)?.component}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .rotating-hexagon-outer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          overflow: visible;
          position: relative;
        }
        .rotating-hexagon {
          position: relative;
          width: 0;
          height: 0;
          transition: transform 0.5s ease-out;
          transform-origin: center center;
        }
        .hex-card-wrapper {
          position: absolute;
          transform-origin: center center;
          transition: transform 0.5s ease;
        }
      `}</style>
    </div>
  );
}