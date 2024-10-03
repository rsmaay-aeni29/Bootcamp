const http = require("http");

http.createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { "Content-Type": "text/html" });

    if (url === "/about") {
        res.write("<h1>ini halaman about</h1>");
    } else if (url === "/contact") {
        res.write("<h2>ini halaman contact</h2>");
    } else {
        res.write("<p>Hello world</p>");
    }
    
    res.end();
}).listen(3000, () => {
    console.log("Server is listening on port 3000");
});
