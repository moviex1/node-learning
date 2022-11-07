const path = require('path');

console.log(path.join(__dirname, '..', '..'));
const fullpath = path.resolve(__dirname, 'first','second.js');
console.log(path.parse(fullpath));
console.log('name of file', path.basename(fullpath));
console.log('', path.normalize(fullpath));


//-----------------------------------------------------


const siteURL = 'http://localhost:8080/user?id=5123';
 asdfasdf
const url = new URL(siteURL);

console.log(url);