class sensorHandler {
    constructor(csvArray) {
        this.csvArray = csvArray;
    }

    handle() {
        let string = '';
        let lastValueX = 0;
        let lastValueY = 0;
        let lastValueZ = 0;
        let valueX = 0;
        let valueY = 0;
        let valueZ = 0;
        let lastTime = 0;
        let lastCSVTime = 0;
        const currTime = Math.round(millis());

        for(var r = 0; r < this.csvArray.length; r++) {
            
            let clampX = screen.width/2;
            let clampY = screen.availHeight/2;
            const time = Math.round(this.csvArray[r].time*100);
            
            let gyroX = this.csvArray[r].wx;
            let gyroY = this.csvArray[r].wy;
            let gyroZ = this.csvArray[r].az;

            if(time <= currTime) {
                stroke(255,255,255);
                fill(255, 255, 255);
                valueX = gyroX;
                valueY = gyroY;
                valueZ = gyroZ;
                // line(r*clampX - 1, lastValueX*clampY + screen.height/2, r*clampX, gyroX * clampY + screen.height/2);
            }
            // stroke(255,0,255);
            // fill(255, 0, 255);
            // ellipse(r*clampX, gyroY*clampY + screen.height/2, 5, 5);
            // line(r*clampX - 1, lastValueY*clampY + screen.height/2, r*clampX, gyroY * clampY + screen.height/2);

            // stroke(255,255,0);
            // fill(255, 255, 0);
            // ellipse(r*clampX, gyroZ*clampY + screen.height/2, 5, 5);
            // line(lastValueX*clampX + screen.width/2, lastValueZ*clampY + screen.height/2, gyroX * clampY + screen.height/2, gyroY * clampY + screen.height/2);
            ellipse(gyroX*clampX + screen.width/2, gyroY*clampY + screen.height/2, 5, 5);

            // stroke(255,255,255);
            fill(255, 255, 255)
            text(currTime + "\n" + time, 100,100);

            lastValueX = valueX;
            lastValueY = valueY;
            lastValueZ = valueZ;
        }

        
        
    }

    draw() {

    }

    toString() {
        return JSON.stringify(this.csvArray);
    }

    
    

}


const time = new Symbol("time");
const gForce = new Symbol("gforce");
const accel = new Symbol("accel");
const gyro = new Symbol("gyro");