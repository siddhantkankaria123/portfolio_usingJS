var x = document.getElementById("menus");
var y = document.getElementById("cross");
var z = document.getElementById("ham");
function myfunction() {
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    z.style.display = "none";
    y.style.display = "block";
    x.style.display = "block";
  }
}
function crossfunction() {
  if ((y.style.display = "block")) {
    x.style.display = "none";
    z.style.display = "block";
    y.style.display = "none";
  }
}
