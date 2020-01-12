const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  //process.exit();
  res.setHeader('Content-Type', 'text/html');

  if(req.url === '/') {
    res.write('<hmtl>');
    res.write('<head>');
    res.write('<title>TESTE</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</hmtl>');
    return res.end();
  }

  if(req.url === '/message' && req.method === 'POST') {
    const body = [];
    
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });

    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.write('<hmtl>');
  res.write('<head>');
  res.write('<title>TESTE</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>TESTE RES NODE</h1>');
  res.write('</body>');
  res.write('</hmtl>');
  res.end();
});

server.listen(3000);

