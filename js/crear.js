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

    divParent = document.querySelector('#app');
    divParent.insertAdjacentHTML('afterbegin',`<div id='${clave}'><h3>${nombre}</h3><p>Precio: ${precio}</p><button onclick="borrar('${clave}')" class='agregar'>Borrar</button></div>`);
    }
}

function borrar(id){
    console.log(id)
    //    delete localStorage.id;
    localStorage.removeItem(id);
    window.location.reload()

}

