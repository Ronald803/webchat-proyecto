const express = require('express');
const { createServer } = require('http');
const realtimeServer = require('./realtimeServer')
const path = require('path');

const app = express();
const httpServer = createServer(app);

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'))

//routes
app.use( require('./routes') );

//Public
app.use(express.static(path.join(__dirname,'public')))

// raise server
httpServer.listen(app.get('port'),()=>{
    console.log("El servidor esta corriendo en el puerto", app.get('port'));
});

// to socket io
realtimeServer(httpServer);