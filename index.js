const http = require('http');

const server = http.createServer((req, res) =>{
    res.write("Python!")
    res.end() //end the response
});

// port number
const PORT = 3000;

server.listen(PORT);

// display message in the terminal 
console.log(`Stage 1 running at http://localhost:${PORT}`)

/* To start this program, 
I use the following command (node index.js), 
which will start the server and 
connect to the server port number 
specified in the configuration 
*/
