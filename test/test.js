var request = require("supertest");
var app = require("../index.js");

describe('Mis pruebas', function() 
{
	it("Página inicial", function(done) {
		request(app)
			.get("/")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
	it("Segunda página", function(done) {
		request(app)
			.get("/pagina1")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
	it("Tercera página", function(done) {
		request(app)
			.get("/pagina2")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
	it("Cuarta página", function(done) {
		request(app)
			.get("/cuartapagina")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
});
