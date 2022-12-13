//localStorage.setItem('001', 47.99);
//localStorage.setItem('002', 47.99);
//alert( localStorage.getItem('test') ); // 1
//delete localStorage.test;


function myFunction(id){

    //obteniendo datos
    let obtener = document.getElementById(id)
    //console.log(obtener)
    let nombre = obtener.querySelector(".nombre").textContent;
    //console.log(nombre)
    let precio = obtener.querySelector(".precio").textContent;
    //console.log(precio)

    //guardando en local storage
    localStorage.setItem(`${id}`, `${precio},${nombre}`);

    swal("¡Éxito!", "Juego agregado a tu lista!", "success"); 
      pinta(id)

}


