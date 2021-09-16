const http = require('http');

//req is the demand of the client tet res cest ce que le server repond
const server = http.createServer((req,res)=>{
    console.log(req);
    if(req.url === '/'){
        res.end('Welcome to my world')
    }
    if(req.url === '/about'){
        res.end('Hello nigga')
    }
    //res.end('aaaaaaaaaaaa')
})

server.listen(5000)