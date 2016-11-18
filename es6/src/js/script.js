$(function() {
    const html = $("#test").html();

    const test =JSON.parse(localStorage.getItem('test'));


    const content = tmpl(html, {
        data:test
    });

    $('body').append(content);
});