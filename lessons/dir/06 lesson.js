const http = require('http');
const fs = require('fs');
const path = require('path');

const delay = (ms) => new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
})

const readFileAsync = (path) => new Promise ( (resolve, reject) =>{
    fs.readFile(path, (err, data) =>{
        if(err){
            reject(err);
        }
        else{
           resolve(data);
        }
    });

})
const server = http.createServer(async (req, res) =>{
    if(req.url === '/home'){
        const data = await readFileAsync(path.resolve(__dirname, 'pages', 'page1.html'))
        res.write(data);
        console.log("204 working fine!");
    }
    else{
        res.write("error");
    }
    res.end();
})

server.listen(3000);

