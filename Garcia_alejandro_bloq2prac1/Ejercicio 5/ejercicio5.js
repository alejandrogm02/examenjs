var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
function sacardatos(){
objeto = document.getElementById("content");
XMLHttpRequestObject.open("GET", 'eval.js', true);
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&                   
XMLHttpRequestObject.status == 200) {
    document.getElementById("content").innerHTML = eval(XMLHttpRequestObject.responseText);
                           }

                                                  }
XMLHttpRequestObject.send(null);
                                      }

window.onload = function(){
document.getElementById("boton").onclick = sacardatos;
}