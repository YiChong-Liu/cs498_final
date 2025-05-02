import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MostActiveCountry() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get("/api/most-active-country")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((error) => {
        console.error("Error fetching most active country:", error);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
        🌍 Most Active Country
      </h2>
      {country ? (
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #eee',
          lineHeight: 1.6
        }}>
          <p><strong>Country:</strong> {country.country}</p>
          <p><strong>Tweet Count:</strong> {country.tweet_count}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}