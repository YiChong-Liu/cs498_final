import React, { useState } from 'react';

export default function ThreadByUser() {
  const [screenName, setScreenName] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockData = [
    { user: { screen_name: 'blcklcfr' }, text: 'This is a mock tweet!', created_at: '2023-05-01T12:00:00Z' },
    { user: { screen_name: 'blcklcfr' }, text: 'Reply to previous tweet.', created_at: '2023-05-01T12:01:00Z' }
  ];

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults(mockData);
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
        🧵 Thread by User
      </h2>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
        <input
          value={screenName}
          onChange={e => setScreenName(e.target.value)}
          placeholder="Enter screen name"
          style={{
            flex: 1,
            padding: '0.8rem',
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {results.map((tweet, idx) => (
            <li key={idx} style={{
              marginBottom: '1rem',
              backgroundColor: '#f9f9f9',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #eee'
            }}>
              <strong>@{tweet.user.screen_name}</strong>: {tweet.text}
              <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>
                {new Date(tweet.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}