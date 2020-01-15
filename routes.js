const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write("<hmtl>");
    res.write("<head>");
    res.write("<title>TESTE</title>");
    res.write("</head>");
    res.write("<body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
    );
    res.write("</body>");
    res.write("</hmtl>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.write("<hmtl>");
  res.write("<head>");
  res.write("<title>TESTE</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>TESTE RES NODE</h1>");
  res.write("</body>");
  res.write("</hmtl>");
  res.end();
};

// module.exports = {
//   handler: requestHandler,
//   someText: 'Some text here!'
// };

exports.handler = requestHandler;
exports.someText = 'Some text here';