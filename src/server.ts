require('dotenv')
import express from 'express';
import { PORT } from './utils/constants';
export const app = express();
export const serverIO = express()
          .use(app)
          .listen(PORT, () => {
            console.log(`Listening Socket on ${ PORT }`)
          });
export const http = require("http").createServer(app);
export const io = require("socket.io")(http)
app.use(require('cors')())

const socket = io.listen(serverIO);

let connectionStatus = require('../controllers');

socket.on('connection', function(client){
  console.log(`${client.id} is connected`);

  socket.emit('welcome', {hello: "world"})

  client.on('dynamic-values', function(data){
    connectionStatus.dynamic(socket)  
  })

  client.on('static-values', function(data){
    connectionStatus.static(socket)  
  })

  client.on('forceDisconnect', function(data){
    socket.close();
  })
})
