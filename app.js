var $setBtn = $('#set-color');

//default color is black
$('.brush-color').css("background-color", "black");

$(document).ready(function(){
  for (var i = 1; i < 10000; i++) {
    $('.square').append(($('<div>').addClass('pixel')));
  }

  $('.pixel').mouseover(function(event){
    $(this).css("background-color", $('.brush-color').css("background-color"));
  })
});

$setBtn.on('click', function(){
  $('.brush-color').css("background-color", $('input').val());
})

//listen on clicking 'enter'
$('input').on("keypress", function(e){
  if (e.which ==13)
  $('.brush-color').css("background-color", $('input').val());
})

$('#clearBtn').on('click', function(){
  $('.pixel').css("background-color", "white");
})
