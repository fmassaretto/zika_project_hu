$(document).ready(function(){
  // cache elements
var $div1 = $('#div1'),
    $div2 = $('#div2');

// clone elements and their contents
var $div1Clone = $div1.clone(),
    $div2Clone = $div2.clone();

// switch places
$div1.replaceWith($div2Clone);
$div2.replaceWith($div1Clone);
});
