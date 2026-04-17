#!/usr/bin/env python3
from http.server import HTTPServer, BaseHTTPRequestHandler
import os

class DownloadHandler(BaseHTTPRequestHandler):
    def do_HEAD(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html; charset=utf-8')
        self.end_headers()
    
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            html = """
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
    .steps {
      text-align: left;
      margin-top: 2rem;
      padding: 1rem;
      background: #f8f9fa;
      border-radius: 10px;
    }
    .steps h3 {
      margin-top: 0;
      color: #333;
    }
    .steps ol {
      margin: 0;
      padding-left: 1.5rem;
    }
    .steps li {
      margin: 0.5rem 0;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="emoji">🎉</div>
    <h1>Woody Build Hazır!</h1>
    <p>Production build dosyalarınız hazır.</p>
    <a href="/download" class="download-btn">📦 woody-build.zip İndir (521 KB)</a>
    
    <div class="steps">
      <h3>📋 Sonraki Adımlar:</h3>
      <ol>
        <li>Yukarıdaki butona tıklayarak zip dosyasını indirin</li>
        <li>Zip dosyasını açın</li>
        <li>İçindeki tüm dosyaları (index.html, static klasörü vs.) GitHub repo'nuza yükleyin</li>
        <li>GitHub Settings → Pages → Source: "Deploy from a branch" → Branch: main → Save</li>
        <li>5 dakika bekleyin, siteniz hazır! 🚀</li>
      </ol>
    </div>
  </div>
</body>
</html>
            """
            self.wfile.write(html.encode('utf-8'))
            
        elif self.path == '/download':
            zip_path = '/tmp/woody-build.zip'
            if os.path.exists(zip_path):
                self.send_response(200)
                self.send_header('Content-type', 'application/zip')
                self.send_header('Content-Disposition', 'attachment; filename="woody-build.zip"')
                file_size = os.path.getsize(zip_path)
                self.send_header('Content-Length', str(file_size))
                self.end_headers()
                with open(zip_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.send_response(404)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()
    
    def log_message(self, format, *args):
        pass  # Suppress logs

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 3001), DownloadHandler)
    print('Download server running on port 3001')
    server.serve_forever()
