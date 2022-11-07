const crypto = require('crypto');

const start = Date.now()

crypto.pbkdf2('123tt', '5', 10000, 64, 'sha521', () => {
    console.log(Date.now() - start)
})

console.log(start);