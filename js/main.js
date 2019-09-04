var a = "",
    b = "";
var operation = "";
var last_click = 0; //0-numbers  1-'+' 2-'-' 3-'/' 4-'*' 5-'c'
var field = document.getElementById("input_call");
var show = document.getElementById("show");

function summ(x, y) {
    return (parseFloat(x) + parseFloat(y));
}

function subtraction(x, y) {
    return (parseFloat(x) - parseFloat(y));
}

function division(x, y) {
    return (parseFloat(x) / parseFloat(y));
}

function multiply(x, y) {
    return (parseFloat(x) * parseFloat(y));
}

function calc() {
    b = field.value;
    var res = "0";
    switch (last_click) {
        case 0:
        case 1:
            if (operation === "+") {
                res = summ(a, b);
                field.value = res;
            }
        case 2:
            if (operation === "-") {
                res = subtraction(a, b);
                field.value = res;
            }
        case 3:
            if (operation === "÷") {
                if (b != 0) {
                    res = division(a, b);
                    field.value = res;
                } else {
                    field.value = "0";
                    alert("Ошибка! На 0 делить нельзя");
                }
            }
        case 4:
            if (operation === "*") {
                res = multiply(a, b);
                field.value = res;
            }
        default:
    }
    operation = "";
    last_click = 6;
    return false;
}

const press = (num) => {
    show.value += num;
    if (last_click > 0 || field.value == '0')
        field.value = num;
    else
        field.value = `${field.value}${num}`;
    last_click = 0;
    return false;
};

var btn_c = document.getElementById('button-C');
if (btn_c) {
    btn_c.addEventListener('click', function() {
        last_click = 7;
        operation = "";
        field.value = "0";
        show.value = "";
        a = "0";
        return false;
    })
}

var btn_plus = document.getElementById('button-plus');
if (btn_plus) {
    btn_plus.addEventListener("click", function() {
        if (show.value != '' && last_click === 0) show.value += '+';
        else if (operation != '+' && last_click != 0) {
            show.value = show.value.slice(0, -1);
            show.value += '+';
        } else if (last_click != 1) show.value += field.value + '+';

        if (operation != "+" && last_click === 0) { calc(); }
        if (operation === "+" && last_click === 0) {
            b = field.value;
            a = summ(a, b);
            field.value = a;
            operation = "";
        } else a = field.value;
        operation = "+";
        last_click = 1;
        return false;
    })
}
var btn_minus = document.getElementById('button-minus');
if (btn_minus) {
    btn_minus.addEventListener("click", function() {
        if (show.value != '' && last_click === 0) show.value += '-';
        else if (operation != '-' && last_click != 0) {
            show.value = show.value.slice(0, -1);
            show.value += '-';
        } else if (last_click != 2) show.value += field.value + '-';

        if (operation != "-" && last_click === 0) calc();
        if (operation == "-" && last_click == 0) {
            b = field.value;
            a = subtraction(a, b);
            field.value = a;
            operation = "";
        } else a = field.value;
        operation = "-";
        last_click = 2;
        return false;
    })
}

var btn_divide = document.getElementById('button-divide');
if (btn_divide) {
    btn_divide.addEventListener("click", function() {
        if (show.value != '' && last_click === 0) show.value += '÷';
        else if (operation != '÷' && last_click != 0) {
            show.value = show.value.slice(0, -1);
            show.value += '÷';
        } else if (last_click != 3) show.value += field.value + '÷';

        if (operation != "÷" && last_click === 0) calc();
        if (operation == "÷" && last_click == 0) {
            b = field.value;
            a = division(a, b);

            field.value = a;
            operation = "";
        } else a = field.value;
        operation = "÷";
        last_click = 3;
        return false;
    })
}

var btn_times = document.getElementById('button-times');
if (btn_times) {
    btn_times.addEventListener("click", function() {
        if (show.value != '' && last_click === 0) show.value += '*';
        else if (operation != '*' && last_click != 0) {
            show.value = show.value.slice(0, -1);
            show.value += '*';
        } else if (last_click != 4) show.value += field.value + '*';

        if (operation != "*" && last_click === 0) calc();
        if (operation == "*" && last_click == 0) {
            b = field.value;
            a = multiply(a, b);
            field.value = a;
            operation = "";
        } else a = field.value;
        operation = "*";
        last_click = 4;
        return false;
    })
}

var btn_calc = document.getElementById('button-calc');
if (btn_calc) {

    btn_calc.addEventListener("click", function() {
        show.value = "";
    })
}

var btn_plus_minus = document.getElementById('button-plus-minus');
if (btn_plus_minus) {
    btn_plus_minus.addEventListener("click", function() {
        if (parseFloat(field.value) > 0) {
            field.value = "-" + field.value;
        } else if (parseFloat(field.value) == 0) field.value = "0";
        else field.value = field.value.slice(1);
        return false;
    })
}

var btn_dot = document.getElementById('button-dot');
if (btn_dot) {
    btn_dot.addEventListener("click", function() {
        if (field.value.indexOf(".") == -1) {
            field.value = field.value + ".";
        }
        return false;
    })
}

var btn_CE = document.getElementById('button-CE');
if (btn_CE) {
    btn_CE.addEventListener("click", function() {
        if (last_click === 0) {
            show.value = show.value.slice(0, -1);
            last_click = 8;
            field.value = a;
            return false;
        }
    })
}

var btn_back = document.getElementById('button-back');
if (btn_back) {
    btn_back.addEventListener("click", function() {
        if (field.value == '0' || field.value.length == 1 || field.value == "NaN") {
            field.value = 0;
        } else field.value = field.value.slice(0, -1);
        return false;
    })
}

var btn_percentage = document.getElementById('button-percentage');
if (btn_percentage) {
    btn_percentage.addEventListener("click", function() {
        let a = field.value;
        field.value = division(a, 100);
        show.value = '';
        return false;
    })
}
var btn_super = document.getElementById('button-super');
if (btn_super) {
    btn_super.addEventListener("click", function() {
        let a = field.value;
        field.value = Math.pow(a, 2);
        show.value = '';
        return false;
    })
}
var oneDx = document.getElementById('button-oneDx');
if (oneDx) {
    oneDx.addEventListener("click", function() {
        let a = field.value;
        field.value = division(1, a);
        show.value = '';
        return false;
    })
}

var btn_root = document.getElementById('button-root');
if (btn_root) {
    btn_root.addEventListener("click", function() {
        let a = field.value;
        field.value = Math.pow(a, 1 / 2);
        show.value = '';
        return false;
    })
}