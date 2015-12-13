var express=require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));


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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
}); 


module.exports = app;
