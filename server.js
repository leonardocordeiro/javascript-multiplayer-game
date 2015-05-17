var express = require('express')
, app = express()
, http = require('http').Server(app)
, io = require('socket.io')(http)
, path = require('path');

app.use(express.static(path.join(__dirname, '/')));

io.on('connection', function(socket) { 
	console.log('connected');

	socket.on('coordenadas', function(msg) { 
		socket.emit('coordenadas', msg);
		socket.broadcast.emit('coordenadas', msg);
	})

	socket.on('coordenadas-limpar', function(msg) { 
		socket.emit('coordenadas-limpar', msg);
		socket.broadcast.emit('coordenadas-limpar', msg);
	})

})

http.listen(3000, function(){
  console.log('listening on:3000' + __dirname);
});

