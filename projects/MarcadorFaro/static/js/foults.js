/// ------------------------------------------------------------------------
// Foults
// Scope: Keep team foults updated, track foults, reset foults, adding foult
/// ------------------------------------------------------------------------


/// Foults -------------------------------------------------

const gFoults = [];
gFoults["f_home"]=0;
gFoults["f_guest"]=0;

function resetFoults(){
    gFoults["f_home"]=0;
    gFoults["f_guest"]=0;
    document.getElementById( "f_home" ).innerHTML = "&nbsp;";
    document.getElementById( "f_guest" ).innerHTML = "&nbsp;";    
}

function updateFoults( lTeam ){
    
    lHtml = "";
    lId= "f_"+lTeam;
    for( i=0; i< gFoults[lId] && i<4; i++ ){
        lHtml +="<li>🔴</li>";
    }
    if( gFoults[lId] >= 4 ){
        lHtml ="<li style='font-size: 1.5vw;'>🚩</li>";
        logFoult( lTeam, "4a FALTA DE EQUIPO", "EQUIPO CON 4 O MÁS FALTAS EN EL CUARTO" );
    }
    document.getElementById( lId ).innerHTML = "<ul>"+lHtml+"</ul>";
}

function addFoult( lTeam, lTipo, lComentario ){
    
    lId= "f_"+lTeam;
    gFoults[ lId ] += 1;
    updateFoults( lTeam );
    logFoult( lTeam, lTipo, lComentario );
}


/// ! Foults ! ---------------------------------------------
