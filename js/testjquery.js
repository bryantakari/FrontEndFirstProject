$(document).ready(function(){
    var index = -1;
    $(".try").click(function(){
        var temp = $(".imageSlider");
        temp.get(1).style.display = "block";
        console.log($(".imageSlider").get(3));
    });
});