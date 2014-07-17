$(function(){
    var inputCmd =[];
    $(window).keyup(function(e){
        inputCmd.push(e.keyCode);
        if(inputCmd[0] != '38'){
            inputCmd = [];
        }
        if(inputCmd.length >1 && inputCmd[1] != '38'){
            inputCmd = [];
        }
        if(inputCmd.length > 2 && inputCmd[2] != '40'){
            inputCmd =[];
        }
        if(inputCmd.length > 3 && inputCmd[3] != '40'){
            inputCmd =[];
        }
        if(inputCmd.length > 4 && inputCmd[4] != '37'){
            inputCmd =[];
        }
        if(inputCmd.length > 5 && inputCmd[5] != '39'){
            inputCmd =[];
        }
        if(inputCmd.length > 6 && inputCmd[6] != '37'){
            inputCmd =[];
        }
        if(inputCmd.length > 7 && inputCmd[7] != '39'){
            inputCmd =[];
        }
        if(inputCmd.length > 8 && inputCmd[8] != '66'){
            inputCmd =[];
        }
        if(inputCmd.length > 9 && inputCmd[9] != '65'){
            inputCmd =[];
        }
        if(inputCmd.length == 10){
            $("header h1").css('color','#00a8bd');
            inputCmd =[];
        }
        console.log(inputCmd);
        // console.log(inputCmd[1] );
    });
});
