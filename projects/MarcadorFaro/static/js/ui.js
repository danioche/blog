/// ------------------------------------------------------------------------
// UI 
// Scope: Interactions with the user on the APP
/// ------------------------------------------------------------------------

//
// Modal functions
//
function pickMiss( lTeam ){

    // Get the modal
    var modal = document.getElementById("myModal");
    var textShow = document.getElementById("modal-text-foults");

    modal.style.display = "block";

    textShow.innerHTML=" \
        <p>  \
            Intento fallido<br><br> \
            <center> \
                <button onclick=\"missPoints('"+lTeam+"',1);cleanModal();\">T.Libre</button> \
                <button onclick=\"missPoints('"+lTeam+"',2);cleanModal();\">Canasta</button> \
                <button onclick=\"missPoints('"+lTeam+"',3);cleanModal();\">Triple</button> \
            </center> \
        </p> \
    ";
    textShow.style.display = "block";
}

//
// General function Show - Menu
//
function showMenu(lid) {
    var x = document.getElementById(lid);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function pickPlay( lTeam ){

    // Get the modal
    var modal = document.getElementById("myModal");
    var textShow = document.getElementById("modal-text-foults");

    modal.style.display = "block";

    textShow.innerHTML=" \
        <p>  \
            Jugada de Estadística<br><br> \
            <center> \
                <button onclick=\"logEvent('"+lTeam+"', '"+active_Player+"' , 'ASISTENCIA', '');cleanModal();\">Asistencia</button> \
                <button onclick=\"logEvent('"+lTeam+"', '"+active_Player+"' , 'REBOTE', '');cleanModal();\">Rebote</button> \
                <button onclick=\"logEvent('"+lTeam+"', '"+active_Player+"' , 'ROBO', '');cleanModal();\">Robo</button> \
                <button onclick=\"logEvent('"+lTeam+"', '"+active_Player+"' , 'TAPÓN', '');cleanModal();\">Tapón</button> \
            </center> \
        </p> \
    ";

    textShow.style.display = "block";
    updateLog();
}

function pickFoult( lTeam ){

    // Get the modal
    var modal = document.getElementById("myModal");
    var textShow = document.getElementById("modal-text-foults");

    modal.style.display = "block";

    textShow.innerHTML=" \
        <p>  \
            ¿Qué tipo de falta?<br><br> \
            <center> \
                <button onclick=\"addFoult('"+lTeam+"','FALTA','PERSONAL');cleanModal();\">Personal</button> \
                <button onclick=\"logFoult('"+lTeam+"','LUCHA','Lucha por Balón');cleanModal();\">Lucha</button> \
                <button onclick=\"logFoult('"+lTeam+"','PASOS','Pasos del jugador');cleanModal();\">Pasos</button> \
                <button onclick=\"logFoult('"+lTeam+"','DOBLES','Dobles del jugador');cleanModal();\">Dobles</button> \
                <button onclick=\"logFoult('"+lTeam+"','PIES','Pies del jugador');cleanModal();\">Pies</button> \
                <button onclick=\"addFoult('"+lTeam+"','FALTA','TECNICA');cleanModal();\">Tecnica</button> \
                <button onclick=\"addFoult('"+lTeam+"','FALTA','ANTI DEPORTIVA');cleanModal();\">An.Dept</button> \
            </center> \
        </p> \
    ";

    textShow.style.display = "block";
}

function cleanModal(){
     // Get the modal
     var modal = document.getElementById("myModal");
     var textShow = document.getElementById("modal-text-foults");
     modal.style.display = textShow.style.display = "none";
}

function showSetupModal(){
    // Get the modal
    var modal = document.getElementById("myModal");
    var textShow = document.getElementById("modal-text-foults");
    var configShow = document.getElementById("modal-text-setup");
    textShow.style.display = "none";
    modal.style.display = configShow.style.display = "block";
}

/// ---------------------------------------------------------------
/// ! Drag and Drop !
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('balon');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    var ply = document.getElementById('jugador');
    ply.style.left = (event.clientX + parseInt(offset[0],10)-20) + 'px';
    ply.style.top = (event.clientY + parseInt(offset[1],10)-15) + 'px';
    var plyName = document.getElementById('jugadorActivo');
    plyName.style.left = (event.clientX + parseInt(offset[0],10)-15) + 'px';
    plyName.style.top = (event.clientY + parseInt(offset[1],10)-28) + 'px';
    event.preventDefault();
    return false;
} 

function moveBall( event ){
    var dm = document.getElementById('balon');
    var posX=event.clientX-20;
    var posY=event.clientY-20;
    dm.style.left = (posX) + 'px';
    dm.style.top = (posY) + 'px';
    var ply = document.getElementById('jugador');
    ply.style.left = (posX-20) + 'px';
    ply.style.top = (posY-15) + 'px';
    var plyName = document.getElementById('jugadorActivo');
    plyName.style.left = (posX-15) + 'px';
    plyName.style.top = (posY-28) + 'px';
    var enemyTshirt = document.getElementById('jugadorEnemyTshirt');
    enemyTshirt.style.left =  ply.style.left;
    enemyTshirt.style.top = ply.style.top;
}

var dm = document.getElementById('balon'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

var canchaGridObj = document.getElementById('canchaGrid');
canchaGridObj.addEventListener("click", moveBall, false);


function getBallPos(){
    var dm = document.getElementById('balon');
    return [ dm.style.left, dm.style.top ];
}
/// ! Drag and Drop ! ------------------------------------------------------

/// Color fun

/// src: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
/// src: https://www.cluemediator.com/converting-hex-color-to-rgb-in-javascript
function hexToRgb(hex) {
    // Remove the hash sign if it's included
    hex = hex.replace(/^#/, '');
  
    // Parse the hex values
    let bigint = parseInt(hex, 16);
  
    // Extract RGB components
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
  
    // Return the RGB values as an object
    return { r, g, b };
  }
/// src: https://blog.logrocket.com/how-to-manipulate-css-colors-with-javascript-fb547113a1b8/
function rgbToLightness(r,g,b){
    return 1/2 * (Math.max(r,g,b) + Math.min(r,g,b));
} 
function rgbToSaturation(r,g,b){
    const L = rgbToLightness(r,g,b);
    const max = Math.max(r,g,b);
    const min = Math.min(r,g,b);
    return (L === 0 || L === 1)
     ? 0
     : (max - min)/(1 - Math.abs(2 * L - 1));
};
function rgbToHue(r,g,b){
    return Math.round(
        Math.atan2(
            Math.sqrt(3) * (g - b),
            2 * r - g - b,
        ) * 180 / Math.PI
      );   
}