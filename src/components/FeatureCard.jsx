// src/components/FeatureCard.jsx
import React, { useState } from 'react';

export default function FeatureCard({ label, onClick, active, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`feature-card ${active ? 'active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-content">{label}</div>

      {/* 覆盖式提示层 */}
      {hovered && (
        <div className="tooltip-overlay">
          <div className="tooltip-text">{description}</div>
        </div>
      )}

      <style>{`
        .feature-card {
          position: relative;
          width: 150px;
          height: 100px;
          background: #e3f2fd;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
          overflow: visible;
        }
        .feature-card:hover {
          transform: scale(1.1) rotate(5deg);
        }
        .feature-card.active {
          background: #bbdefb;
          transform: scale(1.2) rotate(0deg);
        }

        .card-content {
          padding: 1rem;
          text-align: center;
          font-weight: bold;
          z-index: 1;
        }

        /* 覆盖式提示层 */
        .tooltip-overlay {
          position: absolute;
          top: -10px;
          left: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          transform: scale(0.9);
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .feature-card:hover .tooltip-overlay {
          opacity: 1;
          transform: scale(1);
        }

        .tooltip-text {
          color: #222;
          font-size: 1rem;
          text-align: center;
          line-height: 1.2;
        }
      `}</style>
    </div>
  );
}
