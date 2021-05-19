import { clearIntervalBasedOnCounter, 
    getDynamicConnectionStatus, 
    getStaticConnectionStatus } from '../src/utils/utils';

function dynamicConnectionStatus(socket) {
    let counter = 0;
    const looper = setInterval(function(){
    const connectionStatus = getDynamicConnectionStatus()
    counter++   
    clearIntervalBasedOnCounter(counter,looper)
    console.log('connection-status', connectionStatus)
    socket.emit('connection-status', connectionStatus)
    }, 1000)
}

function staticConnectionStatus(socket) {
    let counter = 0;
    const looper = setInterval(function(){
    const connectionStatus = getStaticConnectionStatus(counter)
    counter++   
    clearIntervalBasedOnCounter(counter,looper)
    console.log('connection-status', connectionStatus)
    socket.emit('connection-status', connectionStatus)
  }, 1000)
}


module.exports = {
    dynamic: dynamicConnectionStatus,
    static: staticConnectionStatus
}