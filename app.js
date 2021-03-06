var $setBtn = $('#set-color');

// color stories object
var colorFamily = {
  pastel: {one: '#FBCCE7',
    two: '#ACE1AF',
    three: '#A1CAF1',
    four: '#FBEC5D',
    five: '#D19FE8'},
  jewel: {one: '#1030ee',
    two: '#EE2677',
    three: '#8A1C7C',
    four: '#17825B',
    five: '#03256C'},
  primary: {
    one: '#E73900',
    two: '#E9DF00',
    three: '#02880B',
    four: '#FF1000',
    five: '#0A2472'
  }
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
  $('.errorMsg').css("visibility", 'hidden');
  console.log('should be hidden');
  if ($('.brush-color').css("background-color") != $('input').val())
    // setInterval(showError, 500);
    debugger
    $('.errorMsg').css("visibility", 'visible');
    console.log('color not found');
})
// function showError() {
  // $('.errorMsg').css("visibility", 'visible');
//   clearInterval();
// }
//listen on clicking 'enter'
$('input').on("keypress", function(e){
  if (e.which ==13)
  $('.brush-color').css("background-color", $('input').val());
  $('.errorMsg').css("visibility", 'hidden');
})

$('#clearBtn').on('click', function(){
  $('.pixel').css("background-color", "white");
})

// choosing a color palette
$('.palette').on('click', function(event){
  // ($'.colorOptionsDisplay').toggle();
  var $chosenPalette = event.target.textContent;
  $('.colorOptionsDisplay').css("display", "block");
  // console.log($chosenPalette);
  $('#one').css("background-color", colorFamily[$chosenPalette].one);
  $('#two').css("background-color", colorFamily[$chosenPalette].two);
  $('#three').css("background-color", colorFamily[$chosenPalette].three);
  $('#four').css("background-color", colorFamily[$chosenPalette].four);
  $('#five').css("background-color", colorFamily[$chosenPalette].five);
})

$('.colorOptionsDisplay div').on('click', function(event) {
  var color = $(this).css("background-color");
  $('.brush-color').css("background-color", color);
  $('.errorMsg').css("visibility", 'hidden');
})

$('.colorFamilyList li').click(function(){
    $('.highlight').removeClass('highlight');
$(this).addClass('highlight');

});
