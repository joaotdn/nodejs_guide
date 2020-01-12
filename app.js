const http = require('http');

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  //process.exit();

  if(req.url === '/') {
    res.write('<hmtl>');
    res.write('<head>');
    res.write('<title>TESTE</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form action="/message"><input type="text"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</hmtl>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
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

