function sizeUp(){
  var elements = document.getElementsByClassName('song');

for (var i = 0; i < elements.length; i++) {
  var txt = elements[i];
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  if (currentSize<30){
    txt.style.fontSize = (currentSize + 2) + 'px';
  }

}

}
function sizeDown(){
  var elements = document.getElementsByClassName('song');

for (var i = 0; i < elements.length; i++) {
  var txt = elements[i];
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  if (currentSize>10){
    txt.style.fontSize = (currentSize - 2) + 'px';
  }

}

}

function openTab(){
  var el = document.getElementById('bottoni');
  el.style.left='0px';
  var buttOpen = document.getElementById('open');
  buttOpen.style.display="none";
  var buttClose = document.getElementById('close');
  buttClose.style.display="inline-block";
}

function closeTab(){
  var el = document.getElementById('bottoni');
  el.style.left='-110px';
  var buttOpen = document.getElementById('open');
  buttOpen.style.display="inline-block";
  var buttClose = document.getElementById('close');
  buttClose.style.display="none";

}
