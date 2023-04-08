const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`
     <h1> Welcome to our home page</h1>
        <a href="/about">About</a>
        `)
    }
    else if(req.url === '/about'){
        res.end("This is my about page")
    }else{
        res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">Back to home</a>
        `)
    }
    
})
server.listen(5000)