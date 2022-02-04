var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}
 
 function sacarimagen(datos,idDiv) {
   if(XMLHttpRequestObject) {
     imagen = document.getElementById(idDiv);
     XMLHttpRequestObject.open("GET", datos, true);
    XMLHttpRequestObject.onreadystatechange = function() {
       if (XMLHttpRequestObject.readyState == 4) {
          imagen.src = XMLHttpRequestObject.responseText;
       }
    };
    XMLHttpRequestObject.send(null);
   }
 }