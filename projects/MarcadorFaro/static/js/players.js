/// ------------------------------------------------------------------------
// Players
// Scope: Load DB Players, Players UI, Players Search.
/// ------------------------------------------------------------------------

/// ------------------------------------------------------------------------
/// Database and data manipulation - Ongame Stats
let dbGame={ jugador: [], enemy: [] }; 
function loadDB(){

    // Load all players - Faro
    for (i=0; i<PlayersFaro.length; i++){
        playerRecord = PlayersFaro[i].split(";")
        dbGame["jugador"][ playerRecord[0] ] = { name: playerRecord[1]+"", points: 0, miss: 0, foults: 0 };
    }
    // Load Enemy players
    for (i=0; i<PlayersEnemy.length; i++){
        playerRecord = PlayersEnemy[i].split(";")
        dbGame["enemy"][ playerRecord[0] ] = { name: playerRecord[1]+"", points: 0, miss: 0, foults: 0 };
    }

}
loadDB();

function showPlayersDiv(){
    var obj = document.getElementById("PlayersSearch");
    obj.style.display="block";
    var obj = document.getElementById("EnemySearch");
    obj.style.display="block";
}

function loadPlayersDiv(){
    var playersBox = document.getElementById("PlayerSearchContent");
    lHTML = "";
    for (i=0; i<PlayersFaro.length; i++){
        playerRecord = PlayersFaro[i].split(";")
        lHTML += "<div id='jugador_"+playerRecord[0]+"' class='camiseta' onclick='setPlayer(this,\"jugador\")'>";
        lHTML += " <div class='camiseta_name'>"+ playerRecord[1]+"</div>";
        lHTML += " <div class='camiseta_num'>"+ playerRecord[0]+"</div></div>";
    }
    playersBox.innerHTML = lHTML;
    var playersBox = document.getElementById("EnemySearchContent");
    lHTML = "";
    for (i=0; i<PlayersEnemy.length; i++){
        playerRecord = PlayersEnemy[i].split(";")
        lHTML += "<div id='enemy_"+playerRecord[0]+"' class='camisetaEnemy' onclick='setPlayer(this,\"enemy\")'>";
        lHTML += " <div class='camiseta_name'>"+ playerRecord[1]+"</div>";
        lHTML += " <div class='camiseta_num'>"+ playerRecord[0]+"</div></div>";
    }
    playersBox.innerHTML = lHTML;
}

function searchPlayersDiv( lnum ){
    var playersBox = document.getElementById("PlayerSearchContent");
    lHTML = "";
    for (i=0; i<PlayersFaro.length; i++){
        playerRecord = PlayersFaro[i].split(";")
        if( lnum == playerRecord[0] || lnum == 0 ){
            lHTML += "<div id='jugador_"+playerRecord[0]+"' class='camiseta' onclick='setPlayer(this,\"jugador\")'>";
            lHTML += " <div class='camiseta_name'>"+ playerRecord[1]+"</div>";
            lHTML += " <div class='camiseta_num'>"+ playerRecord[0]+"</div></div>";            
        }
        if(lnum==playerRecord[0]) active_Player = lnum ;
    }
       
    if (lHTML == ""){
        playersBox.innerHTML = "<h3>No en DB FARO</h3>";
        active_Name = "Jugador";
        active_Player = lnum;
        active_Team = "jugador";
        var plyName = document.getElementById('jugadorActivo');
        plyName.innerHTML = "<h2>"+active_Player+"</h2>";
    }
    else
        playersBox.innerHTML = lHTML;        
}


function searchEnemyDiv( lnum ){
    var playersBox = document.getElementById("EnemySearchContent");
    lHTML = "";
    for (i=0; i<PlayersEnemy.length; i++){
        playerRecord = PlayersEnemy[i].split(";")
        if( lnum == playerRecord[0] || lnum == 0 ){
            lHTML += "<div id='enemy_"+playerRecord[0]+"' class='camisetaEnemy' onclick='setPlayer(this,\"enemy\")' style='background-color:"+gColorEnemy+"'>";
            lHTML += " <div class='camiseta_name'>"+ playerRecord[1]+"</div>";
            lHTML += " <div class='camiseta_num'>"+ playerRecord[0]+"</div></div>";            
        }
        if(lnum==playerRecord[0]) active_Player = lnum ;
    }
       
    if (lHTML == ""){
        playersBox.innerHTML = "<h3>No en DB FARO</h3>";
        active_Name = "Contrario";
        active_Player = lnum;
        active_Team = "enemy";
        var plyName = document.getElementById('jugadorActivo');
        plyName.innerHTML = "<h2>"+active_Player+"</h2>";
    }
    else
        playersBox.innerHTML = lHTML;

}

let active_Player=0;
let active_Team="jugador";
function setPlayer( me, lTeam ){
    active_Team = lTeam;
    active_Player = (me.id).split("_")[1];
    active_Name = (me.id).split("_")[0];
    var plyName = document.getElementById('jugadorActivo');
    plyName.innerHTML = "<h2>"+dbGame[active_Team][active_Player].name+"</h2>";
    if (active_Team=="enemy"){
        var obj = document.getElementById('jugadorEnemyTshirt');
        obj.style.display = "block";
        var ply = document.getElementById('jugador');
        obj.style.left = ply.style.left;
        obj.style.top = ply.style.top;
    }else{
        var obj = document.getElementById('jugadorEnemyTshirt');
        obj.style.display = "none";
    }

}

function loadPlayersEditDiv(){
    var playersBox = document.getElementById("dbPlayersEdit");
    lHTML = "";
    for (i=0; i<PlayersFaro.length; i++){
        playerRecord = PlayersFaro[i].split(";")
        lHTML += "<input type='text' class='grid' size=2 name='jugador_"+i+"_0' value='"+playerRecord[0]+"'><input type='text' class='grid' size=10 name='jugador_"+i+"_1' value='"+playerRecord[1]+"'><br>";
    }
    playersBox.innerHTML = lHTML;
}

function loadPlayersEnemyEditDiv(){
    var playersBox = document.getElementById("dbPlayersEnemyEdit");
    lHTML = "";
    for (i=0; i<PlayersEnemy.length; i++){
        playerRecord = PlayersEnemy[i].split(";")
        lHTML += "<input type='text' class='grid' size=2 name='jugador_"+i+"_0' value='"+playerRecord[0]+"'><input type='text' class='grid' size=10 name='jugador_"+i+"_1' value='"+playerRecord[1]+"'><br>";
    }
    playersBox.innerHTML = lHTML;
}

function loadPlayersEdit(){
    loadPlayersEditDiv();
    loadPlayersEnemyEditDiv()
}

let gColorEnemy="";
function changeCamisetaColorEnemy( lvalue ){
    gColorEnemy=lvalue+"";
    for(i=0; i < PlayersEnemy.length ; i++){
        var e = document.getElementById("enemy_"+PlayersEnemy[i].split(";")[0]);
        e.style.backgroundColor = lvalue+"";
    }
    // Changing color to enemyAvatar
    var e = document.getElementById("jugadorEnemyTshirt");
    e.style.backgroundColor = lvalue+"";
}

function doUpdateDB(){
    var playersDataForm = document.getElementById("updateDB");
    for (i=0,j=0; i<playersDataForm.length-1; i=i+2,j++){
        PlayersFaro[j] = playersDataForm.elements[i].value+";"+playersDataForm.elements[i+1].value;
    }
    loadDB();
    loadPlayersDiv();
    return false;
}

function doUpdateDBEnemy(){
    var playersDataForm = document.getElementById("updateDBEnemy");
    for (i=0,j=0; i<playersDataForm.length-1; i=i+2,j++){
        PlayersEnemy[j] = playersDataForm.elements[i].value+";"+playersDataForm.elements[i+1].value;
    }
    loadDB();
    loadPlayersDiv();
    return false;
}

loadPlayersEdit();
loadPlayersDiv();