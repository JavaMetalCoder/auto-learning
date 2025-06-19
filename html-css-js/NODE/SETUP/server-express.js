const express = require('express');
const app = express();

// Database finto per test
const users = [
    {id: '1', nome: 'Mario', email: 'mario@example.com'},
    {id: '2', nome: 'Luigi', email: 'luigi@example.com'}
];

// 🎯 TEST req.params.id
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    
    console.log('🔍 Parametro ricevuto:', userId);
    console.log('🔍 Tipo di dato:', typeof userId);
    console.log('🔍 req.params completo:', req.params);
    
    const user = users.find(u => u.id === userId);
    
    if (user) {
        res.status(200).json({
            messaggio: `Utente ${userId} trovato!`,
            user: user,
            parametri_ricevuti: req.params
        });
    } else {
        res.status(404).json({
            errore: `Utente con ID ${userId} non trovato`,
            parametri_ricevuti: req.params,
            utenti_disponibili: users.map(u => u.id)
        });
    }
});

// 🎯 TEST multipli parametri
app.get('/users/:id/posts/:postId', (req, res) => {
    const userId = req.params.id;
    const postId = req.params.postId;
    
    console.log('🔍 User ID:', userId);
    console.log('🔍 Post ID:', postId);
    console.log('🔍 Tutti i parametri:', req.params);
    
    res.status(200).json({
        messaggio: `Post ${postId} dell'utente ${userId}`,
        parametri: req.params,
        url_completo: req.originalUrl
    });
});

// 🎯 TEST diversi status codes
app.get('/test-status/:code', (req, res) => {
    const statusCode = parseInt(req.params.code);
    
    console.log('🔍 Status code richiesto:', statusCode);
    
    res.status(statusCode).json({
        messaggio: `Hai richiesto status code ${statusCode}`,
        significato: getStatusMeaning(statusCode),
        parametro_ricevuto: req.params.code
    });
});

// Funzione helper per spiegare i status code
function getStatusMeaning(code) {
    const meanings = {
        200: 'OK - Tutto perfetto',
        201: 'Created - Risorsa creata',
        400: 'Bad Request - Richiesta malformata',
        401: 'Unauthorized - Non autenticato',
        404: 'Not Found - Risorsa non trovata',
        500: 'Internal Server Error - Errore del server'
    };
    return meanings[code] || 'Status code non catalogato';
}

app.listen(3002, () => {
    console.log('🚀 Server di test attivo su http://localhost:3002');
    console.log('');
    console.log('🧪 URL DA TESTARE:');
    console.log('   📋 http://localhost:3002/users/1          → User esistente');
    console.log('   📋 http://localhost:3002/users/999        → User inesistente (404)');
    console.log('   📋 http://localhost:3002/users/2/posts/123 → Multipli parametri');
    console.log('   📋 http://localhost:3002/test-status/200   → Status 200');
    console.log('   📋 http://localhost:3002/test-status/404   → Status 404');
    console.log('   📋 http://localhost:3002/test-status/500   → Status 500');
    console.log('');
    console.log('👀 Guarda la console per vedere i log di req.params!');
});