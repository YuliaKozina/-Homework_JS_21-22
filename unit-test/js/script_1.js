var app = {
    start: function () {
        var a = prompt('Enter a number');
        var x = prompt('Enter a degree');

        app.pow(a, x);
    },
    pow: function (a, x) {

        var i = 0;
        var b = 1;

        if (x >= 0) {

            while (x > i) {
                b = b * a;
                i++;
            }
        } else {

            while (x < i) {
                b = b * a;
                i--;
            }
            b = 1 / b;
        }

        console.log(b);
    }

};

try {
    module.exports = app;
} catch (e) { }
