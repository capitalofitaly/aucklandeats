var questions = $('.question').length;
var total  = 0;
var average = 0;

$('.answer').on('click' , function(){
    $9(this).addClass('selected');
    total += $(this).data('value');

    console.log(total);
})
