function carSpeed(speed){
    if (speed < 70){
        return 'OK';
    }
    else if (speed > 70 && (speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12){
        const points =  (speed - 70) / 5
        return `Points: `+ points
    }
    else if ( (speed - 70) / 5 > 12 ){
        return 'License suspended'
    }
    
}

