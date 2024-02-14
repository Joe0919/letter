onload = () => {
  document.body.classList.remove("container");
};

var tituloOriginal = document.title; // Lo guardamos para restablecerlo
window.onblur = function(){ // Si el usuario se va a otro lado...
  document.title = "No te vayas, vuelve aquí 😢";// Cambiamos el título
}

window.onfocus = function(){
  document.title = tituloOriginal; // Si el usuario vuelve restablecemos el título
}