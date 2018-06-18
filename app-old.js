

const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json'});
     
      let salida = { 
         nombre:'Angel Cristo',
           edad: 32,
            url: req.url
     }
    
     res.write( JSON.stringify( salida));
     //resp.write("Hola mundo");
     res.end();

})

.listen(8080);

console.log("escuchando el puerto 8080");