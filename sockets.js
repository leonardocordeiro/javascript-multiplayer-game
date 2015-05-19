var jogo = document.getElementById('jogo');
var c = jogo.getContext('2d');

c.fillStyle = 'green';

function emit(channel) { 
	socket.emit(channel, {x: x, y: y});
}

function apagar(x, y) {
	emit('coordenadas-limpar');

	socket.on('coordenadas-limpar', function(coordenadas) {
		c.clearRect(coordenadas.x, coordenadas.y, 10, 10);
	})
	
}

function desenhar(x, y) {
	socket.emit('coordenadas', {x: x, y: y});
	
	socket.on('coordenadas', function(coordenadas) {
		c.fillRect(coordenadas.x, coordenadas.y, 10, 10);
	})
  }

socket.on('connected',function() { 
	c.fillRect(10, 10, 10, 10);
});
