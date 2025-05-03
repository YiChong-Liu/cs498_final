// src/components/HexGrid.jsx
import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import ThreadByUser from './ThreadByUser';
import MostActiveCountry from './MostActiveCountry';
import MostActiveUser from './MostActiveUser';
import TopHashtags from './TopHashtags';
import UserReplyCycles from './ThreeUserCycles';
import VerifiedUserEngagement from './VerifiedUserEngagement';

export default function HexGrid() {
  const [activeCard, setActiveCard] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 让六边形持续旋转
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

  // 在这里为每个卡片增加 description 提示
  const features = [
    {
      id: 'thread',
      label: 'Thread by User',
      component: <ThreadByUser />,
      input: true,
      description: 'Shows all reply tweets from a specific user, ordered by time.'
    },
    {
      id: 'country',
      label: 'Most Active Country',
      component: <MostActiveCountry />,
      input: false,
      description: 'Displays the country with the most tweets using the place_country field.'
    },
    {
      id: 'user',
      label: 'Most Active User',
      component: <MostActiveUser />,
      input: false,
      description: 'Finds the user who posted the most tweets overall.'
    },
    {
      id: 'hashtags',
      label: 'Top Hashtags',
      component: <TopHashtags />,
      input: true,
      description: 'Lists the most frequently used hashtags, counting each occurrence.'
    },
    {
      id: 'cycles',
      label: 'User Reply Cycles',
      component: <UserReplyCycles />,
      input: false,
      description: 'Finds a group of 3 users who replied to each other in a full cycle.'
    },
    {
      id: 'engagement',
      label: 'Verified Engagement',
      component: <VerifiedUserEngagement />,
      input: false,
      description: 'Shows what percent of tweets by verified users are replies, retweets, or original posts.'
    }
  ];

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
      <div style={{
  position: 'relative',
  textAlign: 'center',
  marginBottom: '2rem'
}}>
  <h1 style={{
    fontSize: '2.8rem',
    fontWeight: '900',
    background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 10px rgba(0,0,0,0.15)',
    margin: 0
  }}>
    🎤 Eurovision Tweet Dashboard
  </h1>
  <p style={{
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#666',
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: '0.3rem 0.8rem',
    borderRadius: '8px',
    display: 'inline-block'
  }}>
    Real-time Twitter insights from verified and active users.
  </p>
</div>

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
                    <FeatureCard
                      label={feature.label}
                      active={activeCard === feature.id}
                      description={feature.description}
                      onClick={() => handleCardClick(feature.id)}
                    />
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
          {!activeCard && <p>Please select a feature above.</p>}
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
