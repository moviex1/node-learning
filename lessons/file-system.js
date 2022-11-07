const fs = require('fs');
const path = require('path');
const process = require('process');

const writeFileAsync = async (path, data) =>{
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err)=>{
        if(err){
            reject(err);
        }
        resolve();
    }) )
}

const readFileAsync = async (path) =>{
    return new Promise ( (resolve, reject) => fs.readFile(path, (err,data) =>{
        if(err){
            reject(err);
        }
        resolve(data);
    }))
}

const removeFileAsync = async (path) =>{
    return new Promise (( resolve, reject) => fs.rm(path, (err)=>{
        if(err){
            reject(err);
        }
        resolve();
    }) )
}

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, "task.txt"), text)
    .then(
        () => readFileAsync(path.resolve(__dirname, "task.txt"))
    )
    .then(
       res => writeFileAsync(path.resolve(__dirname, "task2.txt"), res)
    )
    .then(
        () => removeFileAsync(path.resolve(__dirname, "task.txt"))
    )
