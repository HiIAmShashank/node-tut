const {readFile,writeFile} = require('fs');
readFile('./content/first.txt','utf8',(error,result)=>{
    if(error){
        console.log(error)
        return
    }
    const firstFile = result
    readFile('./content/second.txt','utf8',(error,result)=>{
        if(error){
            console.log(error)
            return
        }
        const secondFile = result
        writeFile('./content/result-async.txt',`Here is the result: ${firstFile}, ${secondFile}`,(error,result)=>{
            if(error){
                console.log(error)
                return
            }
            console.log(result)
        })
    })
})