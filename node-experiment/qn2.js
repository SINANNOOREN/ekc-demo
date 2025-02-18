const fs=require("fs")
fs.readFile("input.txt",'utf8',(err,num)=>{
    if(err){
        console.log(err.message)
    }else{
        for(let i=1;i<10;i++)
        {
            let mult=String(i*num)
      
        fs.writeFile("output.txt",mult,(err)=>{
            if(err){
                console.log(err.message)
            }
            else{
                console.log('success')
            }
            
        })
    }
}
})