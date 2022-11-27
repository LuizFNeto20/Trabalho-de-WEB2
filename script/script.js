var $circles = document.querySelectorAll(".circle");
var $next = document.querySelector(".Next");
var $prev = document.querySelector(".Prev");
var $bar = document.querySelector(".bar")
var $form1 = document.querySelectorAll(".form1");
var $form2 = document.querySelectorAll(".form2");
var $form3 = document.querySelectorAll(".form3");
var $form4 = document.querySelector(".form4");

var cont = 1;

$next.addEventListener('click', function () {
    cont += 1;

    if (cont > $circles.length) {
        cont = $circles.length
    }

    formDisplayGoing(cont)
    border();
    bar(cont);
    disabled(cont);
})

$prev.addEventListener('click', function () {
    cont -= 1;

    if (cont < 1) {
        cont = 1
    }

    formDisplayReturn(cont)
    border();
    bar(cont);
    disabled(cont);
})

function border() {
    for (let i = 0; i < $circles.length; i += 1) {
        if (i < cont) {
            $circles[i].classList.add("border");
        }
        else {
            $circles[i].classList.remove("border");
        }
    }
}

function bar(cont) {
    if (cont === 2) {
        $bar.style.width = "35%";
        border(1);
    }
    else if (cont === $circles.length - 1) {
        $bar.style.width = "65%";
        border(2);
    }
    else if (cont === $circles.length) {
        $bar.style.width = "100%"
        border(3);
    }
    else {
        $bar.style.width = "0%";
    }
}

function disabled(cont) {
    if (cont === 1) {
        $prev.disabled = true;
    }
    else if (cont === $circles.length) {
        $next.disabled = true;
    }
    else {
        $prev.disabled = false;
        $next.disabled = false;
    }
}

function formDisplayGoing(cont) {
    if (cont === 2) {
        classReplace($form1, 'form1', 'form2');
        classReplace($form2, 'form2', 'form1');
    }
    else if (cont === 3) {
        classReplace($form2, 'form1', 'form2');
        classReplace($form3, 'form3', 'form1');
    }
    else if (cont === 4) {
        classReplace($form3, 'form1', 'form3');
        classForms($form4, 'form4', 'form1');
    }
}

function formDisplayReturn(cont) {
    if (cont === 1) {
        classReplace($form1, 'form2', 'form1');
        classReplace($form2, 'form1', 'form2');
    }
    else if (cont === 2) {
        classReplace($form2, 'form2', 'form1');
        classReplace($form3, 'form1', 'form3');
    }
    else if (cont === 3) {
        classReplace($form3, 'form3', 'form1');
        classForms($form4, 'form1', 'form4');
    }
}

function classReplace(forms, oldClass, newClass) {
    forms.forEach((div) => {
        classForms(div, oldClass, newClass)
    })
}

function classForms(div, oldClass, newClass) {
    div.classList.replace(oldClass, newClass);
}

/*else if (div.className === 'form3') {
    classReplace(div, 'form3', 'form1');
} 
else if (div.className === 'form4') {
    classReplace(div, 'form4', 'form1');
}*/