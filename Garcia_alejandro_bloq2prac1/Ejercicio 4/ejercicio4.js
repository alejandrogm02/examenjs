window.onload = function(){
  document.getElementById("boton").onclick = descargaArchivo;
}

function descargaArchivo() {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
     peticionHttp = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticionHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  // Preparar la funcion de respuesta
  peticionHttp.onreadystatechange = muestraContenido;
  // Realizar peticion HTTP
  peticionHttp.open('GET', 'datos.xml', true);
  peticionHttp.send(null);
  function muestraContenido() {
    if(peticionHttp.readyState == 4) {
      if(peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("Obras_literarias")[0];
        var tope = root.getElementsByTagName("Libro").length;
        //Recorremos todos los elementos Libro del documento
        for(var i = 0; i < tope; i++){
          libro = root.getElementsByTagName("Libro")[i];
          autor = libro.getElementsByTagName("Autor")[0].firstChild.nodeValue;
          titulo = libro.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
          muestraHTML('content',"Autor: "+autor+", titulo: "+titulo+"<br/>");
        }
      }
    }
  }
  function muestraHTML(id, texto){
    if(document.getElementById){
      document.getElementById(id).innerHTML += texto;
    }
  }
}
