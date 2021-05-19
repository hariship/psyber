require('dotenv')
import express from 'express';

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http)
const PORT = 5000


app.use(require('cors')())

const server = express()
              .use(app)
              .listen(PORT, () => {
                console.log(`Listening Socket on ${ PORT }`)
              });
const socket = io.listen(server);

socket.on('connection', function(client){
  console.log(`${client.id} is connected`);
  let counter = 0;
  const looper = setInterval(function(){   
    counter++
    if(counter >= 15){
      clearInterval(looper);
    }
    socket.emit('announcements', { [counter]: new Date() }); 
 }, 1000);
});