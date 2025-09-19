import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{color:'white', padding:'1rem'}}>
      <h1>🌊 Ocean Data Chatbot</h1>
      <p>Ask me anything about the Indian Ocean (Argo data powered).</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
