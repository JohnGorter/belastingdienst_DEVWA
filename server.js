var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


app.use(express.static('app'));

app.post('/voorbeeld', function(req, res){
   console.log('dank u voor uw bijdrage...');
   res.writeHead(200, {"Content-Type": "application/json"});
   res.end();
    })

app.get('/manifest.appcache', function (req, res){
    var file = fs.readFileSync('./app/app.manifest');
    res.writeHead('content-type','text/cache-manifest');
    res.write(file);
    res.end();
});
    
    
app.get('/voorbeeld', function(req, res) {
    setTimeout(function(){
        res.writeHead(200, {"Content-Type": "application/json"});
        
        var person = [{ name:"John", lastname:"Gorter"},{ name:"Harold", lastname:"Gorter"}];
        res.end(JSON.stringify(person));
    }, 5000);
    
    });

app.listen(1338);

console.log('Server running at http://127.0.0.1:1338/');