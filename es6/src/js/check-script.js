$(function () {

    const html = $("#rightAnswers").html();
    const rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
    let radios = document.getElementsByTagName('input');
    let userAnswers = [];
    let result_field = document.getElementById('result_field');
    let j = 0;
    let point = 0;

    $('button').on('click', function () {

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {

                userAnswers[j] = radios[i].value;
                j++;
            };
        };

        if (rightAnswers.length === userAnswers.length) {

            for (let i = 0; i < rightAnswers.length; i++) {

                if (rightAnswers[i] === userAnswers[i]) {
                    point++;
                };

                result_field.innerHTML = point + " correct answers";
            };
        };
    });

    $('#reset_btn').click(function() {
        $('input:checked').prop('checked', false);
    });

});


