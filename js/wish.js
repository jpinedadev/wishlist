function pinta(id){

    // retrieving our data and converting it back into an array
    var retrievedData = localStorage.getItem(`${id}`);
    console.log(retrievedData)

    let corta = retrievedData.split(",")
    console.log(corta)
    let nombre1 = corta[1];
    let precio1 =  corta[0];
    console.log('Nombre: '+nombre1)
    console.log('precio: '+precio1)

}


