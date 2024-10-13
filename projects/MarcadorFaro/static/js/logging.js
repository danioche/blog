/// ------------------------------------------------------------------------
// Log logic
// Scope: Keep the logging of the game
/// ------------------------------------------------------------------------

/// Events log format
let matchEventsLog = ["Q;TIME;SCORE HOME;SCORE GUEST;TEAM;PLAYER;EVENT;INFO;BALL"];
let sLog = ";";

/// Logging events -------------------------------------------------
function logEvent(lteam, lplayer, levent, linfo){

    var log = "";
    
    // Quarter
    log += gQuarter + sLog;

    // Time
    var ltime = getTime();
    log += ltime[0]+":"+ltime[1] + sLog;

    // SCORING
    log += homeCount + sLog + guestCount + sLog;

    // TEAM
    log += lteam + sLog;
 
    // PLAYER
    log += lplayer + sLog;

    // EVENT
    log += levent + sLog;

    // INFO
    log += linfo + sLog;

    // BALL
    var lballPos = getBallPos();
    log += lballPos[0]+","+lballPos[1];

    matchEventsLog[matchEventsLog.length] = log + "";
}
///
function updateLog(){
    var taLog = document.getElementById("log");
    taLog.innerHTML = matchEventsLog.join("\n");
}
/// Only Once when Game is in Q1 and Time is running (Play).
function startLog(){
    var lHome = document.getElementById("titleHome").innerHTML;
    var lGuest = document.getElementById("titleGuest").innerHTML;
    var w = window.innerWidth;
    var h = window.innerHeight;
    logEvent("BOTH","ALL","START","Inicio del Partido "+ lHome+" vs. "+lGuest+ " - ("+w+"x"+h+")");
    logEvent("BOTH","ALL","TEAMS",lHome+":"+lGuest);
    logEvent("BOTH","ALL","QUARTERS",gQuartersMany);
    updateLog();
}
/// 
function pointsLog(lTeam, lWho, lComment){

    logEvent(lTeam, lWho , "CANASTA", lComment);
    updateLog();
}
/// 
function missLog(lTeam, lWho, lComment){

    logEvent(lTeam, lWho , "FALLO TIRO", lComment);
    updateLog();
}
///
function fixPoints(){
    logEvent("NONE", "USER" , "FIX Marcador!", "Fix del marcador por usuario");
    updateLog();
}
/// 
function logFoult( lTeam, lTipo, lComentario ){
    logEvent(lTeam, active_Player , lTipo, lComentario);
    updateLog();
}
///
function startQuarter( lQuarter ){
    logEvent("BOTH", "ALL" , "INICIO DE CUARTO", lQuarter+"");
    updateLog();
}