function sendMail(){
    var link = "mailto : dimernicolas@gmail.com"
             + "?cc=" + encodeURIComponent(document.getElementById('email').value)
             + "&subject=" + encodeURIComponent(document.getElementById('assunto').value)
             + "&body=" + encodeURIComponent(document.getElementById('desc').value)
    ;

    window.location.href = link;
}