import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserReplyCycles() {
  const [cycles, setCycles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/three-user-cycles')
      .then(res => {
        setCycles(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching user cycles:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      padding: '2rem',
      overflowY: 'auto'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🔄 Three-User Reply Cycles
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : cycles.length === 0 ? (
        <p>No cycles found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cycles.map((cycle, index) => (
            <li key={index} style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              border: '1px solid #eee',
              padding: '1rem',
              marginBottom: '1rem',
              lineHeight: 1.6
            }}>
              <strong>Cycle {index + 1}:</strong><br />
              A: @{cycle.A} → B: @{cycle.B} → C: @{cycle.C} → A
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
