const fs=require("fs")
fs.readFile("qn.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err.message)
    }else{
        let res=data*data
        fs.writeFile("qn.txt",String(res),(err)=>{
            if(err){
                console.log(err.message)
            }
            else{
                console.log('success')
            }
        })
    }
})