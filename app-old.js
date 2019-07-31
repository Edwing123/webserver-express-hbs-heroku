

const http = require('http');


// creating a server with http module/package
const server = http.createServer( (req, res) => {

  // a different response
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // response for request
  // res.write('Hello World!!');

  let output = {
    name: 'Edwin',
    age: 18,
    url: req.url,
  };

  res.write(JSON.stringify(output));

  // ending response
  res.end();
}).listen(5000);


// listen to a port
// server.listen(3000);
console.log('on port 5000');