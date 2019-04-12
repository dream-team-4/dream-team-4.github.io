$(document).ready(function(){
    /*easy selectors*/
    $('p').css('border-bottom', '1px solid black')
    $('.first').css('border-color','red')
    $('#special').css('background-color','#ffcc00')
    $('p.first small').css('background-color','lightgrey')


/*

content-text, html and input

*/
$('.first').html('lets learn Jquery')
$('.first').prepend('<h2>Welcome</h2>')
$('.first').after('<small>make webpages interactive</small>')
$('#yourName').val('Bob Builder')
/**
 * attribute selector
 */

 $('a[href="#1"]').css('background-color','tomato')
 $('a[href^="#"]').css('color','grey')
 $('a[href*="google"]').css('font-weight', 'bold')

 /**
  * animation
  *  */
//  $('.card:first').delay(1000).hide(400).show(800, function (){ alert('we\'re back')}).css('background-color','tomato')
 $('.card').animate({borderRadius:'20px',}, 400) 

/*
*atribute method 
*/

 $('img:first').attr('src','./img/image-5.jpg')

 /**
  * class method
 */
// $('img:first').hasClass('special')
// $('img').addClass('special')
$('img').toggleClass('special')

// events
/**
 * 
*$('img').click(function() 
*do something on click
 */
$('img').click(function(){
  console.log($(this).attr('src'))
  $(this).toggleClass('special')
})
$('img').click(function(){
  console.log($(this).attr('src','./img/image-5.jpg','.img'))
  $(this).toggleClass('special')
})

/**ajax */

// $('#content').load('./about.html')
// $('#contentNav .nav-link').click(function(e){
// e.preventDefault()
// var page= $(this).attr('href')
// $('#content').load(page)
// })

$('#content').load('./about.html')
$('#contentNav .nav-link').click(function(e){
e.preventDefault()
var page= $(this).attr('href')
$('.active').removeClass('active')
$(this).addClass('active')
$('#content').fadeOut(500, function(){
  $(this).load(page)
}).fadeIn(500)

})
/**using local JSON file with AJAX */
$.ajax({
  url:'data/posts.json',
  type: 'GET',
  dataType:'json'
}).done(function(data){
  // var post = JSON.parse(data)
  console.log(data)
  var numPost = data.posts.lenght
  for(var i = 0; i<numPost; i++){
    var post =   '<div class="col-sm-6 p-5">';
    post +=(i+1)+'.'+data.posts[i].Title
    post += '</h3></p>'
    post+= data.posts[i].body
    post+= '</p></div>'
    $('#posts').append(pots)
  }
})

AOS.init()


})