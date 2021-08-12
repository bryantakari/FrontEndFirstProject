$(document).ready(function(){
    var temp1 = $("#imgcontainer img").css("width").split("px")[0];
    var countLeft = parseInt(temp1);
    var idx = -1*(countLeft);
    console.log(idx);
    setInterval(() => {
        
        var temp = $("#imgcontainer").css("left").split("px")[0];
        var leftP = parseInt(temp);
        console.log(leftP);
        if(temp > idx*(2)){
            leftP+= idx;
            console.log(leftP);
            $("#imgcontainer").animate({left:leftP});
            
        }else{
            leftP = 0;
            $("#imgcontainer").animate({left:leftP});
        }
    }, 5000);
    
})