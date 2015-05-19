var express = require('express')
, app = express()
, http = require('http').Server(app)
, io = require('socket.io')(http)
, path = require('path');

app.use(express.static(path.join(__dirname, '/')));

io.on('connection', function(socket) { 
	console.log('connected');

	socket.on('coordenadas', function(msg) { 
		emit('coordenadas', msg, socket)
	})

	socket.on('coordenadas-limpar', function(msg) { 
		emit('coordenadas-limpar', msg, socket)
	})

})

http.listen(3000, function(){
  console.log('started' + __dirname);
});

function emit(channel, msg, socket) { 
	socket.emit(channel, msg);
	socket.broadcast.emit(channel, msg);
}

