$(".container").mouseenter(function(){
    $(".btn").show()
    $(".container").css("opacity","0.8")

})
$(".container").mouseleave(function(){
    $(".btn").hide()
    $(".container").css("opacity","1")
})