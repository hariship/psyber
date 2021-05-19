import { READINGS } from "./constants";

export function computeAccelerometer(value){
    if(value < 0.5){
        return 1
    }
    return 0
}

export function getDynamicE1(){
  const accelerometer = Math.random();
  return computeAccelerometer(accelerometer)
}

export function getDynamicE2(){
    const accelerometer = Math.random();
    return computeAccelerometer(accelerometer)
}

export function getDynamicE3(){
    const accelerometer = Math.random();
    return computeAccelerometer(accelerometer)
}

export function getDyamicE4(){
    const accelerometer = Math.random();
    return computeAccelerometer(accelerometer)
}

export function getCurrentDate(){
    const today = new Date()
    const mm = today.getMonth()
    const dd = today.getDay()
    const yy = today.getFullYear()
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    const formattedDate = `${dd}-${mm}-${yy}:${time}`
    return formattedDate
}

export function getStaticReadings(counter):any| boolean{
    const readings = READINGS
    if(counter <= 14){
        return {
            E1: readings[counter][0],
            E2: readings[counter][1],
            E3: readings[counter][2],
            E4: readings[counter][3]
        }
    }
    return false
}

export function getStaticConnectionStatus(counter){
    let readings = getStaticReadings(counter)
    if(readings === false){
        return readings
    }
    let { E1, E2, E3, E4 } = readings
    const date = getCurrentDate()
    const connectionStatus = {
        [date]: {
            E1,E2,E3,E4
        }
    }
    return connectionStatus
}

export function getDynamicConnectionStatus(){
    const E1 = getDynamicE1();
    const E2 = getDynamicE2();
    const E3 = getDynamicE3();
    const E4 = getDyamicE4();
    const date = getCurrentDate()

    const connectionStatus = {
        [date]: {
            E1,E2,E3,E4
        }
    }
    return connectionStatus
}

export function clearIntervalBasedOnCounter(counter, looper){
    if(counter >= 15){
        return clearInterval(looper);
    }
}
