const { log } = require("console")
const http=require("http")
const server=http.createServer((req,res)=>{
res.setHeader('Content-type','text/html')
if(req.url=='/'){
    res.end('<h1 style=color:red>Home page</h1>')
}
else if(req.url=='/about'){
    res.end('<h1 style=color:red>about page</h1>')
}
else{
    
    res.end('<h1 style=color:red> page not found</h1>')
}

})

server.listen(5000,()=>console.log("server run on 5000"))