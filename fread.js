var fs = require('fs');
fs.readFile("readmer.txt","utf-8",(err,buf)=>{
    if(err){
        console.log(err);
    }
    console.log(buf);
});
data =" 89007";
fs.writeFile("temp.txt",data,(err)=>{
    if(err){
        console.log(err);      
    }
    console.log("Successfully written into file");
});
