import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function VerifiedUserEngagement() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const itemsPerPage = 5;
  const containerRef = useRef(null);

  useEffect(() => {
    axios.get("/api/verified-user-engagement")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching engagement data:", error);
      });
  }, []);

  const paginatedData = data.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const toNum = (str) => Number(str.replace("%", ""));

  return (
    <div
      ref={containerRef}
      style={{
        height: isExpanded ? '100vh' : '400px',
        width: isExpanded ? '100vw' : 'auto',
        position: isExpanded ? 'fixed' : 'relative',
        top: isExpanded ? 0 : 'auto',
        left: isExpanded ? 0 : 'auto',
        zIndex: isExpanded ? 9999 : 'auto',
        backgroundColor: '#fff',
        borderRadius: isExpanded ? '0' : '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '1rem'
      }}
    >
      {/* Expand / Close Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          position: 'absolute',
          top: '1rem',
          right: isExpanded ? '4rem' : '1rem',
          padding: '0.3rem 0.6rem',
          fontSize: '0.8rem',
          borderRadius: '6px',
          background: '#ddd',
          cursor: 'pointer',
          zIndex: 10000
        }}
      >
        {isExpanded ? '× Close' : '⛶ Expand'}
      </button>

      {/* Header & Total Users */}
      <div style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
          💬 Verified User Engagement
        </h2>
        {currentPage === 0 && (
          <p style={{ margin: 0, marginTop: '0.3rem', color: '#666', fontSize: '0.95rem' }}>
            Total Users: {data.length}
          </p>
        )}
      </div>

      {/* Main Content Grid */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '1rem',
          width: isExpanded ? '90vw' : 'auto',
          maxWidth: isExpanded ? '1200px' : 'unset',
          margin: isExpanded ? '2vh auto' : '0',
          padding: isExpanded ? '2rem' : '1rem',
          display: 'grid',
          gridTemplateColumns: isExpanded ? '1fr 1fr' : '1fr',
          gap: '1.5rem'
        }}
      >
        {paginatedData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          paginatedData.map((user, index) => {
            const globalIndex = currentPage * itemsPerPage + index + 1;
            const chartData = {
              labels: ['Original', 'Reply', 'Retweet'],
              datasets: [{
                data: [
                  toNum(user.original_percentage),
                  toNum(user.reply_percentage),
                  toNum(user.retweet_percentage)
                ],
                backgroundColor: ['#36a2eb', '#ffcd56', '#ff6384'],
                borderWidth: 1
              }]
            };

            return (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1.5rem',
                padding: '1rem',
                borderRadius: '8px',
                backgroundColor: '#fafafa',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
              }}>
                <div style={{ flex: 1 }}>
                  <p><strong>User #{globalIndex}:</strong> {user.user}</p>
                  <p><strong>Original:</strong> {user.original_percentage}</p>
                  <p><strong>Reply:</strong> {user.reply_percentage}</p>
                  <p><strong>Retweet:</strong> {user.retweet_percentage}</p>
                </div>
                <div style={{ width: '120px', minWidth: '120px' }}>
                  <Pie data={chartData} />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      {data.length > itemsPerPage && (
        <div style={{
          position: isExpanded ? 'absolute' : 'relative',
          bottom: isExpanded ? '2rem' : '1rem',
          left: isExpanded ? '1rem' : 'auto',
          right: isExpanded ? '1rem' : 'auto',
          marginTop: isExpanded ? '0' : '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isExpanded ? '#fff' : 'transparent',
          padding: isExpanded ? '0.5rem 1rem' : '0',
          borderRadius: '8px',
          boxShadow: isExpanded ? '0 0 8px rgba(0,0,0,0.1)' : 'none',
          zIndex: 10000
        }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: '#f0f0f0',
              cursor: 'pointer'
            }}
          >
            ← Prev
          </button>
          <span>Page {currentPage + 1} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage >= totalPages - 1}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              background: '#f0f0f0',
              cursor: 'pointer'
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
