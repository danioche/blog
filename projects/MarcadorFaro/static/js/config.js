/// ----------------------------------------------------------------
// Config
// Scope: Main configurations for the APP (user level)
/// ----------------------------------------------------------------

let gQuartersMany=0;
let gEnemy="";
let gFaroIsHome=true;

/// ----------------------------------------------------------------
/// ! TEAMS set-up !
// TODO:  Poder especificar el nombre del equipo contrario
function setCourt(){
    
    modal.style.display = "block";

}

function setAsLocal(){
    var obj = document.getElementById("titleHome");
    obj.innerHTML="EL FARO ⛹️‍♀️";
    var obj = document.getElementById("titleGuest");
    obj.innerHTML=(gEnemy=="")? "guest": gEnemy;
    // Players Search box sorting
    var obj = document.getElementById("PlayersSearch");
    obj.style="left: 2%;";
    var obj = document.getElementById("EnemySearch");
    obj.style="left: 81%;";
    
    gFaroIsHome=true;
    //var lmusic = document.getElementById("musica");
    // lmusic.play();   
}

function setAsVisitante(){
    var obj = document.getElementById("titleGuest");
    obj.innerHTML="EL FARO ⛹️‍♀️";
    var obj = document.getElementById("titleHome");
    obj.innerHTML=obj.innerHTML=(gEnemy=="")? "home": gEnemy;;    
    // Players Search box sorting
    var obj = document.getElementById("PlayersSearch");
    obj.style="left: 81%;";
    var obj = document.getElementById("EnemySearch");
    obj.style="left: 2%;";

    gFaroIsHome=false;
    //var lmusic = document.getElementById("musica");
    // lmusic.play();
    
}
/// ! TEAMS set-up ! -----------------------------------------------

/// CONFIG -----------------------------------------------------------------

function cuartersConfig( lmany ){
    var dm = document.getElementById('timeQBox');
    var lHtml = "";
    lHtml = "<button id=\"PauseResume\" onclick=\"pauseResumeTime()\">&#x23EF;</button>";
    for( i=1; i <= lmany; i++){
        lHtml += "<button id='"+i+"Q' onclick=\"start('"+i+"Q')\">"+i+"Q</button>";
    }
    lHtml += "<button id=\"ResetTime\" onclick=\"resetTime()\">&#x23F1;</button>";
    dm.innerHTML = lHtml;
    gQuartersMany=lmany;
}

/// ! CONFIG  ! ------------------------------------------------------------