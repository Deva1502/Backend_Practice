const http = require('http');
const fs = require('fs');
const myserver = http.createServer((req, res) => {
    const log =`${Date.now()}:${req.url } new req recieved\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.log(err);
        }
        res.end("Hello from my server");
    });
});


const PORT = 3000;

myserver.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})