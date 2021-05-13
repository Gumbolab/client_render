var http = require('http');
var path = require('path');

var express = require('express');
var app = express();
var server = http.createServer(app);
// TAI SAO 
const port = process.env.PORT || 3000;
console.log(__dirname)
app.use(express.static(path.resolve(__dirname , 'views')));
server.listen(port, "0.0.0.0", function () {
        var addr = server.address();
        console.log("All ready! server is listening at", addr.address + ":" + addr.port);
});
