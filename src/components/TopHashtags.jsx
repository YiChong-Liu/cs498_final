import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TopHashtags() {
  const [hashtags, setHashtags] = useState([]);
  const [loading, setLoading] = useState(true);

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
        🔥 Top Hashtags
      </h2>
  
      {/* 内容部分可滚动 */}
      <div
  style={{
    flex: 1,
    overflowY: 'auto',
    paddingRight: '1rem',
    marginBottom: '1rem'
  }}
></div>
      {loading ? (
        <p>Loading...</p>
      ) : hashtags.length === 0 ? (
        <p>No hashtags found.</p>
      ) : (
        <ol style={{ paddingLeft: '1rem', lineHeight: 1.8 }}>
          {hashtags.map((tag, index) => (
            <li key={index}>
              <strong>#{tag.hashtag}</strong> — {tag.count} times
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
