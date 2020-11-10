/* global document, window */
var startup = document.getElementById('startup'),
    menu = document.getElementById('menu'),
    dashboard = document.getElementById('dashboard'),
    tag = 0,
    tag2 = 0,
    tag3 = 0,
    readPar = document.getElementById('readPar'),
    readmore = document.getElementById('readmore'),
    viewCourses = document.getElementById('viewCourses'),
    view = document.getElementById('view'),
    boxc = document.querySelectorAll('.boxc'),
    rev = document.querySelectorAll('.rev');
startup.style.height = window.innerHeight + 'px';
menu.addEventListener('click', function () {
   'use strict';
    if (tag === 0) {
    tag = 1;
    dashboard.style.right = '0';
    } else if (tag === 1) {
         tag = 0;
    dashboard.style.right = '-30%';
    }
});
readmore.addEventListener('click', function () {
  'use strict';  
if (tag2 === 0) {
    tag2 = 1;
    readPar.style.maxHeight = '300px';
    readmore.innerHTML = 'Read Less';
} else if (tag2 === 1) {
    readPar.style.maxHeight = '70px' ;
    tag2 = 0;
    readmore.innerHTML = 'Read More';
}
});
function msg() {
    'use strict';
    var val = prompt('Enter Your ID :)');
    if (val === null ||  val === '') {
        alert('Wrong Input ):');
    } else {
    alert('Your Email has been Activated \n ID: ' + val);
    }
}
viewCourses.addEventListener('click', function () {
    'use strict';
    if (tag3 === 0) {
        tag3 = 1;
           if (boxc[0].offsetLeft == boxc[1].offsetLeft) {
                    view.style.height = '900px';
        } else if (boxc[0].offsetLeft != boxc[1].offsetLeft) {
                    view.style.height = '300px';
        }
        var el = 0;
        for (el; el < 3; el = el + 1) {
        boxc[el].style.height = '300px';
        boxc[el].style.padding = '10px';
        boxc[el].style.border = '1px solid black';
        }
        viewCourses.innerHTML = 'Hidde Courses';
    } else if (tag3 === 1) {
        tag3 = 0;
        view.style.height = '0px';
             var el = 0;
        for (el; el < 3; el = el + 1) {
        boxc[el].style.height = '0px';
        boxc[el].style.padding = '0px';
        boxc[el].style.border = '0px solid black';
    }
            viewCourses.innerHTML = 'View All Courses';
    }
});
var aler = 0;
for (aler; aler < 3; aler = aler + 1) {
    rev[aler].onclick = function () {
        'use strict';
        alert('This Course has been Reserved');
    }
}