/// Grid
/// Scope: Grid funcions and actions to stats - Subdivide the field into a Grid for mapping position of the player and therefore actions on the field
let gGridDimmensions = [32,16]; // W,H
let gGridActive = [0,0]; // posX, posY
function createGrid(c,r){
    var lHtml="";
    for(i=0;i<c;i++){
        for(j=0;j<r;j++){
            lHtml+="<a href='javascript:action("+i+","+j+");' class='item'></a>";
        }
    }
    var obj=document.getElementById("canchaGrid");
    obj.innerHTML = lHtml;
    obj.style.gridTemplateColumns="repeat("+c+", "+ eval(100/c) +"% [col-start])";
    obj.style.gridTemplateRows="repeat("+c+", "+ eval(100/r) +"% [row-start])";
}
createGrid(gGridDimmensions[0],gGridDimmensions[1]);

function action(x,y){
    // Some action occurred
    gGridActive = [x,y];
}