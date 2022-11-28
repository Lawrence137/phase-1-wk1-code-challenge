// A function, carSpeed, that takes in speed as a parameter
function carSpeed(speed){
    if (speed <= 70){
        return 'OK';
    }

// If the difference between carspeed and speed limit divided by 5 does not exceed 12 
    else if (speed > 70 && (speed - 70) / 5 <= 12  ){   
        const points =  Math.floor((speed - 70) / 5)
        return `Points: `+ points
    }

// If the difference between carspeed and speed limit divided by 5 exceeds 12 the license is suspended   
    else if ( (speed - 70) / 5 > 12 ){  
        return 'License suspended'
    }
    
    }

console.log(carSpeed(50));

