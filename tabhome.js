$("#open").click(function(){
    $(".links").css("width","250px")
    $(this).css("margin-left","250px")
})
$(".links i").click(function(){
    $(".links").css("width","0px")
    $("#open").css("margin-left","0px")
})