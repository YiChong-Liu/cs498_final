import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function VerifiedUserEngagement() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

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
<div style={{
  height: '400px', // ✅ 改这里！原来是 height: '100%'
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  padding: '1rem'
}}>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        💬 Verified User Engagement
      </h2>
  
      {/* 内容部分可滚动 */}
      <div
  style={{
    flex: 1,
    overflowY: 'auto',
    paddingRight: '1rem',
    marginBottom: '1rem'
  }}
>
        {paginatedData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          paginatedData.map((user, index) => {
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
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <p><strong>User:</strong> {user.user}</p>
                  <p><strong>Original:</strong> {user.original_percentage}</p>
                  <p><strong>Reply:</strong> {user.reply_percentage}</p>
                  <p><strong>Retweet:</strong> {user.retweet_percentage}</p>
                </div>
                <div style={{ width: '150px' }}>
                  <Pie data={chartData} />
                </div>
              </div>
            );
          })
        )}
      </div>
  
      {/* 分页按钮固定在底部 */}
      {data.length > itemsPerPage && (
        <div style={{
          flexShrink: 0,
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#f0f0f0', cursor: 'pointer' }}
          >
            ← Prev
          </button>
          <span>Page {currentPage + 1} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage >= totalPages - 1}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#f0f0f0', cursor: 'pointer' }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
  
}
