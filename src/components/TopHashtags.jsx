import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TopHashtags() {
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    axios.get('/api/top-hashtags')
      .then(res => {
        setHashtags(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching hashtags:', err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(hashtags.length / itemsPerPage);
  const paginatedData = hashtags.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div style={{
      height: '100%', // 占满外部容器（500px）
      display: 'flex',
      flexDirection: 'column', 
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      padding: '1rem'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🔥 Top Hashtags
      </h2>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        paddingLeft : '1rem',
        paddingRight: '1rem',
        marginBottom: '1rem',
        lineHeight: 1.8
      }}>
        {loading ? (
          <p>Loading...</p>
        ) : paginatedData.length === 0 ? (
          <p>No hashtags found.</p>
        ) : (
          <ol style={{ paddingLeft: '1rem' }}>
            {paginatedData.map((tag, index) => (
              <li key={index}>
                <strong>#{tag.hashtag}</strong> — {tag.count} times
              </li>
            ))}
          </ol>
        )}
      </div>

      {hashtags.length > itemsPerPage && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: '#f0f0f0', cursor: 'pointer' }}
          >
            ← Prev
          </button>
          <span>Page {currentPage + 1} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
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
