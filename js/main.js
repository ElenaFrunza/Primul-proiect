function show(){
    document.getElementById("side-menu").classList.toggle("show");
}

function sendEmail() {
    var nume=document.getElementById("nume").value;
    var mesaj=document.getElementById("mesaj").value;
    window.open('mailto:frunza.elena@edu.md?subject=' +   nume +  '&body=' + mesaj);
  }
