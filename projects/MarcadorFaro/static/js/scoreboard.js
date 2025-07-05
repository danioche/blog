// --------------------------------------------------------------
// Scoreboard
// Scope: Keeping the game result updated at every moment
// --------------------------------------------------------------

// ! Scoring !
// --------------------------------------------------------------
let homePts=document.getElementById('home-pts')
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0

function addPoints( lTeam, lmany){
    if(lTeam == 'home'){
        homeCount=homeCount+lmany
        homePts.innerText=homeCount    
    }else{
        guestCount=guestCount+lmany
        guestPts.innerText=guestCount    
    
    }
    // effects
    var sndPoints = document.getElementById("canasta");
    sndPoints.play();
    // log event
    pointsLog( lTeam, active_Player, "+"+lmany );
    // playerStats
    dbGame[active_Team][active_Player].points += lmany;
}

function missPoints( lTeam, lmany ){
    // log event
    missLog( lTeam, active_Player, "f"+lmany );
    // playerStats
    dbGame[active_Team][active_Player].miss += lmany;
}

function subsPoints( lwho, lmany){
    if(lwho == 'home'){
        homeCount=homeCount-lmany
        homePts.innerText=homeCount    
    }else{
        guestCount=guestCount-lmany
        guestPts.innerText=guestCount      
    }
    // log event
    fixPoints();
}
/// ! Scoring ! ----------------------------------------------------
