const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Credits : https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

//Credits : https://medium.com/@marzouk/how-to-prevent-saving-image-as-or-dragging-image-to-download-it-in-a-web-page-f0ee4121b32f

var message="Right-click has been disabled";
function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}
function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2||e.which == 3) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");
document.getElementsByClassName('my-img').ondragstart = function() { return false; };
