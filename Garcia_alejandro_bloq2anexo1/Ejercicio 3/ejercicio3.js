var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
function sacardatos(datos, idDiv){
if(XMLHttpRequestObject) {
var objeto = document.getElementById(idDiv);
XMLHttpRequestObject.open("POST", datos,true);
XMLHttpRequestObject.setRequestHeader("Content-type","application/x-www-form-urlencoded");
XMLHttpRequestObject.onreadystatechange = function(){
if (XMLHttpRequestObject.readyState == 4 &&                   
XMLHttpRequestObject.status == 200) {
objeto.innerHTML = XMLHttpRequestObject.responseText;
                           }

                                                  }
XMLHttpRequestObject.send("nombre=alejandro");
                          } 
                                      }