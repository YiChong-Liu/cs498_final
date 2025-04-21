import React, { useState } from 'react';
// import axios from 'axios'; // 暂时不用，后面联调再解注

export default function ThreadByUser() {
  const [screenName, setScreenName] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockData = [
    {
      user: { screen_name: 'blcklcfr' },
      text: 'This is a mock tweet!',
      created_at: '2023-05-01T12:00:00Z'
    },
    {
      user: { screen_name: 'blcklcfr' },
      text: 'Reply to previous tweet.',
      created_at: '2023-05-01T12:01:00Z'
    }
  ];

  const handleSearch = async () => {
    setLoading(true);
    setTimeout(() => {
      setResults(mockData); // 用 mock 数据代替 axios 请求
      setLoading(false);
    }, 500); // 模拟请求延迟
  };

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);


  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);


  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

  return (
  <div style={{
    padding: '2rem',
    margin: '2rem auto',
    maxWidth: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  }}>
    <h2 style={{ marginBottom: '1rem' }}>🧵 Thread by User</h2>

    <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
      <input
        value={screenName}
        onChange={e => setScreenName(e.target.value)}
        placeholder="Enter screen name"
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>

    {loading && <p>Loading...</p>}

    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {results.map((tweet, idx) => (
        <li key={idx} style={{
          padding: '0.5rem',
          background: '#fff',
          marginBottom: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}>
          <strong>@{tweet.user.screen_name}</strong>: {tweet.text}<br />
          <em style={{ fontSize: '0.8rem', color: '#666' }}>
            {new Date(tweet.created_at).toLocaleString()}
          </em>
        </li>
      ))}
    </ul>
  </div>
);

}
