//Import modul http dari builtin module node.js
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request, "<<< request");
    console.log(response, "<<< response");
    //bikin rute untuk url dengan metod GET
    if(request.url === "/" ){
        response.write("ini adalah homepage");
        response.end();
    }

    // bikin rute url "/me" dengan metod "GET"
    if(request.url === "/me" && request.method === "GET"){
        response.end("<h1 style='color: red;'>Ini adalah halaman me</h1>");
    }
})


//Membuat variabel PORT
const PORT = 4000

//Menjalankan server
server.listen(PORT,() => {
    console.log(`Server sedang berjalan pada url dan port http://localhost:${PORT}`);
})