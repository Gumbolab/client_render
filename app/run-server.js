var path = require('path');
var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
;
app.use(express.static(path.resolve(__dirname+"/.." , 'viewPage')));
var server = app.listen(port, "0.0.0.0", function () {
        var addr = server.address();
        console.log("All ready! server is listening at", addr.address + ":" + addr.port);
});
