const http = require("http");
const url= require("url")
const server = http.createServer((req, res) => {
    const parsedURl= url.parse(req.url,true)
    console.log(parsedURl)
    const tickets=parsedURl.query.tickets
    if (req.method == "GET") {
        if (parsedURl.pathname == "/CHAAVA") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "CHAAVA", screen: "one",numberoftickets:tickets}));
            res.end();
        } else if (parsedURl.pathname == "/THANDEL") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "THANDEL", screen: "two",numberoftickets:tickets}));
            res.end();
        } else if (parsedURl.pathname== "/SKYFORCE") {
            res.writeHead(200, "ok", { "content-type": "application/json" });
            res.write(JSON.stringify({ "movie name": "SKYFORCE", screen: "three",numberoftickets:tickets}));
            res.end();
        } else {
            res.writeHead(400, "not found", { "content-type": "application/json" });
            res.write(JSON.stringify({ message: "movie not showing now" }));
            res.end();
        }
    } else if (req.method == "POST") {
        res.end();
    } else if (req.method == "PUT") {
        res.end();
    } else if (req.method == "DELETE") {
        res.end();
    } else {
        res.end();
    }
});
server.listen("3101",()=>{
    console.log("server running")
})