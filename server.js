var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('app'));

app.post('/voorbeeld', function(req, res){
   console.log('dank u voor uw bijdrage...');
   res.writeHead(200, {"Content-Type": "application/json"});
   res.end();
    })


app.get('/voorbeeld', function(req, res) {
    setTimeout(function(){
        res.writeHead(200, {"Content-Type": "application/json"});
        
        var person = [{ name:"John", lastname:"Gorter"},{ name:"Harold", lastname:"Gorter"}];
        res.end(JSON.stringify(person));
    }, 5000);
    
    });

app.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');