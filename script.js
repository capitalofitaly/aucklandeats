var questions = $('.question').length;
var total  = 0;
var average = 0;
var myQuestions = $('section.q-n-a');
var currQ = 0;

shuffle(myQuestions);
console.log(myQuestions);
myQuestions.each (function(index){

    var myAnswers = $(this).find('.answer');
    shuffle(myAnswers);
    $(this).find('.answers').html(myAnswers);
    $(this).attr('id', index+1);

    if(index == 0){
    $(this).find('.previous').remove();
    }
    
})

$('#quiz-area').html(myQuestions);

function showQ(){
    $('section.q-n-a').hide();
    currQ++;
    if( $('#'+currQ).length > 0){
        $('#'+currQ).fadeIn(200);
    }else{
        $('.finish').fadeIn();
    }
}

showQ();
    $('.previous, .next, .missed').click(function(){
        if($(this).hasClass('previous')){
            currQ-=2;
        }else if ($(this).hasClass('missed')){
            currQ = 0; 
            $('.response, .finish, .missed').hide();
        }
        showQ();
    })

function shuffle(array){

    for(let i = array.length-1; i > 0; i--){
        let j = Math.floor( Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array [i]];
    }


}

$('.answer').on('click' , function(){
    if($(this).parent().find('.selected').length > 0){
        total -= $(this).parent().find('.selected').data('value');
        $(this).parent().find('.selected').removeClass('selected');
    }

    $(this).addClass('selected');
    total += $(this).data('value');

    console.log(total);
})

$('.finish').on('click', function(){
    avg = total / questions;
    var message = '';
if($('.selected').length === questions){

    if(avg < 5.76){
        message = 'Moustache Milk and Cookie Bar';
    }else if (avg < 6.26){
        message = 'Smth Dumpling';
    }else if (avg < 7.6){
        message = 'Reign and Pour';
    }else {
        message = 'Garrison';
    }

    $('#quiz-area, .finish').hide();
}else{
    message = 'You missed a question';
    $('.missed').show();
}
    $('.response p').text(message)
    $('.response').show();

})
