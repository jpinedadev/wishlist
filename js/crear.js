const cuerpoDelDocumento = document.body;
cuerpoDelDocumento.onload = miFuncion;

function miFuncion(){

var aLength = localStorage.length;
//console.log(aLength)

for (let i = 0; i < aLength; i++) {
    let clave = localStorage.key(i);
    //console.log(clave)

    var retrievedData = localStorage.getItem(`${clave}`);
    //console.log(retrievedData)

    let corta = retrievedData.split(",")
    //console.log(corta)
    let nombre = corta[1];
    let precio =  corta[0];
    console.log('Nombre: '+nombre)
    console.log('precio: '+precio)


    divParent = document.querySelector('.default');
    divParent.insertAdjacentHTML('beforeend',`<tr id='${clave}'><td>${nombre}</td><td>${precio}</td><td><button onclick="borrar('${clave}')" class='agregar'>Borrar</button></td></tr>`);

    }

}

function borrar(id){
    console.log(id)
    //    delete localStorage.id;


swal({
  title: "¿Deseas borrarlo?",
  text: "¡El juego será borrado de tu lista!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
    if (willDelete) {
        localStorage.removeItem(id);
        swal("¡Borrado con éxito!", {
            icon: "success",

        });   
    
        setTimeout(function(){
            window.location.reload()
        }, 1000);

  } else {
    swal("¡Juego guardado!");
  }
});
    //window.location.reload()

}

