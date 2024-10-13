/// ----------------------------------------------------------------
// Time
// Scope: Keeping the time, creating the interval for timmer, updating modifying it
/// ----------------------------------------------------------------

function getTime(){
    var nowTime = document.getElementById("time").innerHTML;
        
    minutes = parseInt(nowTime.split(":")[0]);
    seconds = parseInt(nowTime.split(":")[1]);

    return [minutes, seconds];
}


/// ----------------------------------------------------------------
/// ! TIME MANAGEMENT
var gTimeON=false;
var timerInterval=null;
var gQuarter=0;

function pauseResumeTime(){

    if(gTimeON){
        clearInterval(timerInterval);
        gTimeON=false;
    }else{
        timerInterval = setInterval(function() {

            var nowTime = document.getElementById("time").innerHTML;
        
            minutes = parseInt(nowTime.split(":")[0]);
            seconds = parseInt(nowTime.split(":")[1]);
        
            seconds+=1;
            if (seconds==60){ seconds=0; minutes+=1;}
            if (minutes==60){ seconds=0; minutes=0;}
            // Display the result in the element with id="demo"
            document.getElementById("time").innerHTML =  (minutes<10? "0"+ minutes: minutes) + ":" + (seconds<10? "0"+ seconds: seconds);
           
          }, 1000);
          gTimeON=true;
    }

    var lmusic = document.getElementById("silbato");
    lmusic.play();
}

function resetTime(){

    clearInterval(timerInterval);
    document.getElementById("time").innerHTML = "00:00";
    gTimeON=false;
   
}

function start( lQuarter ){
    obj = document.getElementById("time_label");
    obj.innerHTML = "TIEMPO "+ lQuarter;
    if (lQuarter == "1Q"){
        gQuarter=1;
        startLog();
    } else {
        gQuarter=parseInt(lQuarter.split("Q")[0]);
        startQuarter(lQuarter); 
    }
    if (lQuarter != gQuarter){  
        resetFoults();
    }
}
/// ! TIME MANAGEMENT ---------------------------------------------