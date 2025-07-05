/// ------------------------------------------------------------------------
// User actions with the APP
/// ------------------------------------------------------------------------


/// Preparing information for sending

function doSubmitData(){
    var ret=false;
    
    var dm = document.getElementById('log');
    document.forms[0].dataLog.value=dm.innerHTML;

    if( confirm("¿Enviar datos?") ){


        ret = true;
    }

    return ret;
}

function doSubmitDataServerless(){
    var ret=false;
    
    var dm = document.getElementById('log');
    document.forms[0].dataLog.value=dm.innerHTML;

    if( confirm("¿Enviar datos?") ){

        ret = true;
        document.forms[0].action = "mailto:daniel.pedroche@gmail.com?subject=StatsFaroMarcador&body=" + dm.innerHTML;
    }

    return ret;
}
