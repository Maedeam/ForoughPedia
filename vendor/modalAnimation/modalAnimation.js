$('.element_need_modal').click(function () {

    var buttonId = $(this).attr('id');
    $(`#modal-container[attrForFind="${$(this).attr('attr')}"]`).removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container[attrForFind="one_modal_seven"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="two_modal_two"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="three_modal_one"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="four_modal_six"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="five_modal_five"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="six_modal_four"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="seven_modal_four"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="eight_modal_one"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="nine_modal_seven"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});

$('#modal-container[attrForFind="ten_modal"').click(function () {
    $(this).addClass('out');

    if ($(this).hasClass('four')) {

        setTimeout(() => {
            $(this).removeClass("four");
        }, 600);
    }

    $('body').removeClass('modal-active');
});








