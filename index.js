var express=require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
	var pagina='<!doctype html><html><head></head><body>';   
    pagina +='<form action=\"pagina1\" method=\"get\"> Página de inicio <br><input type=\"submit\" value=\"Avance\"></fomr><br>';  
    
    pagina += '</body></html>';
    	res.send(pagina);
	
});

app.get('/pagina1', function (req, res) {
	var pagina='<!doctype html><html><head></head><body>';   
    pagina +='<form action=\"pagina2\" method=\"get\"> Página siguente <br><input type=\"submit\" value=\"Avance 2\"></fomr><br>';  

    pagina += '</body></html>';
	res.send(pagina);
});

app.get('/pagina2', function (req, res) {
	var pagina='<!doctype html><html><head></head><body>';   
    pagina +='<form action=\"/\" method=\"get\"> Última pagina <br><input type=\"submit\" value=\"Volver inicio\"></fomr><br>';  

    pagina += '</body></html>';
	res.send(pagina);
});  

app.listen(port); 
console.log('Server running at http://127.0.0.1:'+port+'/');

module.exports = app;
