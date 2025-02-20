const http = require("http");
const server =http.createServer((req,res)=>{
    res.write("Ramya")
    res.end("Bhavani")
})
server.listen("3101","192.168.0.105",()=>{
    console.log("Bhumika")
})