window.addEventListener('DOMContentLoaded', bunny, false);

function bunny() {
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', testAlert, false)
    buttons[1].addEventListener('click', changeColor, false)
    buttons[2].addEventListener('click', changeColorBack, false)
}


function testAlert() {
    alert('Test!');
    }
    /* here, style is a *property*: the CSS styling of an element: you can add a CSS property after invoking style. */


function changeColor() {
    var pars = document.getElementsByTagName('body')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "blue";
    }
}


function changeColorBack() {
    var li = document.getElementsByTagName('body')
    for (var i = 0, length = li.length; i < length; i++) {
        li[i].style.backgroundColor = "#cfcfcf";
    }
}

function init() {
    var fieldset = document.getElementsByTagName('input');
    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
}



function turnOnTest() {
  var onCheck = document.getElementById("onCheck");
  const on = document.getElementsByClassName("on");

  if (onCheck.checked == true){
    on[0].style.display = "block";
  } else {
    on[0].style.display = "none";
  }
}