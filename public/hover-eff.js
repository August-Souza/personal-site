document.getElementById("leon").addEventListener("mouseover", mouseOver);
document.getElementById("leon").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("leon-t").style.opacity = 1;
}

function mouseOut() {
  document.getElementById("leon-t").style.opacity = 0;
}
