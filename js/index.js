$(document).ready(function () {

    // навигация: открытие и закрытие нав.панели по клику на меню

    let links_show = true;

    $('.menu img').click(function (){

        if (links_show) {
        $('.head_one .links').show(600);
        }
        else{
            $('.head_one .links').hide(600);
        }
        links_show = !links_show;
    });



    // 1-е модальное окно

    $('.se1 .start').click(function (){
        $('.overlay').show();
    });

    $('.overlay .close-popup').click(function (){
        $('.overlay').hide();
    });

    // <!-- модальное окно из модального окна -->

    $('.overlay button').click(function (){
        $('.shop').show();
    });

    $('.shop .close-popup_shop').click(function (){
        $('.shop').hide();
    });


    // блокировка заполненных полей

    $(function() {
        $('.btn').click(function(e) {
            e.preventDefault();
        if ($('.tur').val() != '') {
            $('.tur').attr('disabled', 'disabled');
        }
        if ($('.tur1').val() != '') {
            $('.tur1').attr('disabled', 'disabled');
        }
        if ($('.tur2').val() != '') {
            $('.tur2').attr('disabled', 'disabled');
        }
        if ($('.tur3').val() != '') {
            $('.tur3').attr('disabled', 'disabled');
        }
        if ($('.tur4').val() != '') {
            $('.tur4').attr('disabled', 'disabled');
        }
        if ($('.tur8').val() != '') {
            $('.tur8').attr('disabled', 'disabled');
        }
    
        })
 });

        
// проверка заполнения полей

$(function() {
    $('.btn').click(function(e) {
        e.preventDefault();
        if($('.tur').val() == '' || $('.tur1').val() == '' || $('.tur2').val() == '' || $('.tur3').val() == '' || $('.tur4').val() == ''){
            alert('Поля не заполнены');
        } 
        else {
            alert('Форма заполнена!');
        }
    });
    })

    // Подсвечивать ошибки в заполнении
   
         $('.btn').click(function(e) {
          $('input[required]').addClass('req');
        });

        // Подсвечивать ошибки в заполнении (css)

        // .popup_shop .req:invalid {
        //     border: 2px solid red;
        //   }
        //   .popup_shop .req:valid {
        //     border: 2px solid green;
        //   }
//    --------------------------------------



// проверка заполнения формы


$(':submit').click(function(e) {
    e.preventDefault();
// 1 вариант
if ($('.name_1').val() != '' && $('.email_1').val() != '' && $('.phone_1').val() != '' && $('textarea').val() != ''){
    alert('поля формы успешно заполнены');
    $('.name_1').attr('disabled', 'disabled');
    $('.email_1').attr('disabled', 'disabled');
    $('.phone_1').attr('disabled', 'disabled');
    $('textarea').attr('disabled', 'disabled');
    $('.top').attr('disabled', 'disabled');
}
else{
    alert('не все поля формы заполнены');
}


// блокировка 2 блока радиометки

$('.block2 input').each(function () {

let flag = true;

if(flag) {
    if ($(this).is(':checked')) {
        $('.block2 input').each(function() {
        $(this).attr('disabled', 'disabled');
            })
        }
    }
    else {
        alert('Выберите способ связи!')
        }
        flag = !flag;
        });

        // Блокировка выпадаюшегося списка

        $('.top').each(function () {
        let flag = true;
            
        if(flag) {
        if ($('.top1').is(':checked')) {
            $('.top').each(function() {
            $(this).attr('disabled', 'disabled');
            })
            }
        if ($('.top2').is(':checked')) {
            $('.top').each(function() {
            $(this).attr('disabled', 'disabled');
            })
            }
        if ($('.top3').is(':checked')) {
            $('.top').each(function() {
            $(this).attr('disabled', 'disabled');
            })
            }
        if ($('.top4').is(':checked')) {
            $('.top').each(function() {
            $(this).attr('disabled', 'disabled');
            })
            }
        if ($('.top5').is(':checked')) {
            $('.top').each(function() {
            $(this).attr('disabled', 'disabled');
            })
            }
    }
        flag = !flag;
        });
    
    });



















});