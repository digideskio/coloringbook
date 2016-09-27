var $setBtn = $('#set-color');

var colorFamily = {
  pastel: {one: '#FBCCE7',
    two: '#ACE1AF',
    three: '#A1CAF1',
    four: '#FBEC5D',
    five: '#D19FE8'},
  jewel: {one: '',
    two: '',
    three: '',
    four: '',
    five: ''},
  primary: {}
}
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

$('#pastel').on('click', function(){
  //change colorBox colors
  $('#one').css("background-color", colorFamily.pastel.one);
  $('#two').css("background-color", colorFamily.pastel.two);
  $('#three').css("background-color", colorFamily.pastel.three);
  $('#four').css("background-color", colorFamily.pastel.four);
  $('#five').css("background-color", colorFamily.pastel.five);

})

$('.colorOptionsDisplay div').on('click', function(event) {
  var color = $(this).css("background-color");
  $('.brush-color').css("background-color", color);
})
