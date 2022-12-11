//localStorage.setItem('001', 47.99);
//localStorage.setItem('002', 47.99);
//alert( localStorage.getItem('test') ); // 1
//delete localStorage.test;


function myFunction(id,price){

    //obteniendo datos
    console.log(id+' '+price)
    let obtener = document.getElementById(id)
    console.log(obtener)
    let nombre = obtener.querySelector(".nombre").textContent;
    console.log(nombre)
    let precio = obtener.querySelector(".precio").textContent;
    console.log(precio)

    //guardando en local storage
    localStorage.setItem(`${id}`, `${price},${nombre}`);
    //obtener local storage
    console.log(localStorage.getItem(`${id}`));
    console.log(localStorage.getItem(`${id}[0]`))
}

