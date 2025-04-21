// src/components/FeatureCard.jsx
import React from 'react';

export default function FeatureCard({ label, onClick, active }) {
  return (
    <div
      onClick={onClick}
      className={`feature-card ${active ? 'active' : ''}`}
    >
      <div className="card-content">{label}</div>

      <style>{`
        .feature-card {
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
        }
      `}</style>
    </div>
  );
}
