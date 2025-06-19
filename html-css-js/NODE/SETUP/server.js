const http = require('http');
const utils = require('./utils');

// ✅ Mostriamo l'output di utils.saluta
console.log(utils.saluta("MetalCoder"));

const server = http.createServer((request, response) => {
    
    // ✅ ROUTING CORRETTO - UNA response.end() per percorso
    
    if (request.url === '/') {
        
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        const now = new Date();
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>🚀 MetalCoder Server</title>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        text-align: center; 
                        background: linear-gradient(45deg, #667eea, #764ba2); 
                        color: white; 
                        padding: 50px; 
                    }
                    .container { 
                        background: rgba(255,255,255,0.1); 
                        padding: 30px; 
                        border-radius: 15px; 
                        backdrop-filter: blur(10px); 
                    }
                    a { color: #00ff88; margin: 0 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🎉 Congratulazioni MetalCoder!</h1>
                    <h2>Il tuo primo server Node.js è VIVO!</h2>
                    <p>Ora locale: ${now.toLocaleString('it-IT')}</p>
                    <p>URL richiesto: ${request.url}</p>
                    <p>Metodo HTTP: ${request.method}</p>
                    <hr>
                    <p>🔥 JavaScript sta girando sul SERVER!</p>
                    <p>
                        <a href="/about">Chi sono</a> | 
                        <a href="/api">API JSON</a>
                    </p>
                </div>
            </body>
            </html>
        `;
        response.end(html); // ✅ UNA SOLA volta!
        
    } else if (request.url === '/about') {
        
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(`
            <h1>👤 Chi sono</h1>
            <p>Sono MetalCoder, programmatore in crescita!</p>
            <a href="/">🏠 Torna alla home</a>
        `); // ✅ UNA SOLA volta!
        
    } else if (request.url === '/api') {
        
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({
            messaggio: 'Ciao dal server!',
            timestamp: new Date(),
            utente: 'MetalCoder',
            url: request.url,
            metodo: request.method
        }, null, 2)); // ✅ UNA SOLA volta!
        
    } else {
        
        response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(`
            <h1>404 - Pagina non trovata</h1>
            <p>La pagina "${request.url}" non esiste.</p>
            <a href="/">🏠 Torna alla home</a>
        `); // ✅ UNA SOLA volta!
    }
    
}); // ✅ Fine della callback

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server in ascolto su http://localhost:${PORT}`);
    console.log('💡 Premi Ctrl+C per fermarlo');
    console.log('');
    console.log('🔗 URL disponibili:');
    console.log('   - http://localhost:3000/');
    console.log('   - http://localhost:3000/about');
    console.log('   - http://localhost:3000/api');
});