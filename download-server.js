const express = require('express');
const path = require('path');
const app = express();

// Ana sayfa - download linki
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Woody Build Download</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          text-align: center;
          max-width: 500px;
        }
        h1 {
          color: #333;
          margin-bottom: 1rem;
        }
        .download-btn {
          display: inline-block;
          padding: 1rem 2rem;
          background: #FF6B35;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        .download-btn:hover {
          background: #E55A2B;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255,107,53,0.3);
        }
        .info {
          color: #666;
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="emoji">🎉</div>
        <h1>Woody Build Hazır!</h1>
        <p>Production build dosyalarınız hazır.</p>
        <a href="/download" class="download-btn">📦 woody-build.zip İndir</a>
        <p class="info">
          İndirdikten sonra zip dosyasını açın ve içindekileri<br>
          <strong>minayayinevi-pixel/woody</strong> repo'nuzun root dizinine yükleyin.
        </p>
      </div>
    </body>
    </html>
  `);
});

// Zip download endpoint
app.get('/download', (req, res) => {
  const file = '/tmp/woody-build.zip';
  res.download(file, 'woody-build.zip', (err) => {
    if (err) {
      console.error('Download error:', err);
    }
  });
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Download server running on port ${PORT}`);
});
