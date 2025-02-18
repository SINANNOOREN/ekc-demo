const fs=require('fs')
const data='heooooo'
fs.writeFile("output.txt",data,(err)=>{
    if(err){
        console.log('error writing file',err)
    }
    else{
        console.log('data saved successfully')
    }
})