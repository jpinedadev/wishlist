//localStorage.setItem('001', 47.99);
//localStorage.setItem('002', 47.99);
//alert( localStorage.getItem('test') ); // 1
//delete localStorage.test;


function myFunction(id){

    //obteniendo datos
    let obtener = document.getElementById(id)
    console.log(obtener)
    let nombre = obtener.querySelector(".nombre").textContent;
    console.log(nombre)
    let precio = obtener.querySelector(".precio").textContent;
    console.log(precio)

    //guardando en local storage
    localStorage.setItem(`${id}`, `${precio},${nombre}`);
    //obtener local storage
    console.log(localStorage.getItem(`${id}`));

    // retrieving our data and converting it back into an array
    var retrievedData = localStorage.getItem(`${id}`);
    console.log(retrievedData)
    //var arreglos = JSON.parse(retrievedData);
 
    //making sure it still is an array
//alert(arreglos.length);

}

function borrar(id){
    alert('borrando...');



}
