var text = 'Web Developer.';
var i = 0;

var typing = setInterval(function() {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    if (i > text.length - 1) {
        clearInterval(typing);
    }
}, 250);

 function toggleNav() {
    var navbar = document.getElementById("navbarNav");
    navbar.classList.toggle("show");
  }
  document.getElementsByClassName('btn-link')[0].onclick=function(){
  document.getElementById('read').className="";
  document.getElementsByClassName('btn-link')[0].classList.remove('d-inline-block');
  document.getElementsByClassName('btn-link')[0].hidden=true;
}