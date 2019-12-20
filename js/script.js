// $(document).ready(function(){
//     document.write("hello world")
// })


// $('button').click(function(){
//     alert("hello every")
// })

$('#mybutton').click(function(){
    $('.paragraphe').css('font-size','42px')
})


$('.container').mouseenter(function(){
    $('.btn').show();
    $('.container').css('opacity','0.8')
})

$('.container').mouseleave(function(){
    $('.btn').hide();
    $('container').css('opacity','1')
})