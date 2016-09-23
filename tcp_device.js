var sensor_value = 0;
var log_color = require('colors');
module.exports = {
  sensor_data : function(){
    return sensor_value;
  },
  init : function(){
    var net = require('net')
     , sockets = [];

    var HOST = '192.168.20.2';
    var PORT = 8000;

    var server = net.createServer(function(socket){
    	sockets.push(socket);
    	socket.on('data',function(data){
        sensor_value = data;
        console.log(data);
    	});

    	socket.on('end',function(){
    		var i = sockets.indexOf(socket);
    		sockets.splice(i,1);
    	});
    });

    server.listen(PORT,HOST);
    console.log(log_color.green("TCP server open, IP : "+ Host + ", PORT : "+PORT));
  }
};
