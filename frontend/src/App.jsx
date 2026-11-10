import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('Connecting to the API…');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMessage() {
      try {
        const response = await fetch('/api/hello', { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setMessage('Could not connect. Make sure the FastAPI server is running.');
        }
      }
    }

    loadMessage();
    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>Exam Helper</h1>
      <p>Your React + FastAPI starter is ready.</p>
      <p role="status">{message}</p>
      <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noreferrer">
        Open API docs
      </a>
    </main>
  );
}
