//dependecia a XMLHttpResquest
const http = require('xmlhttprequest').XMLHttpRequest

const url = "https://newton.now.sh/api/v2/factor/x^2-1"

//Funcion para conectara una Api publica 
function get_data(endpoint){
    let promise = new Promise(function(resolve , rejected){
    //1. crear el objeto de conexion
    const h = new http()
    //2. abrir una conexion a la api
    h.open('GET' , endpoint)
    //3. Enviar la request definida 
    h.send()
        //4. una vez recibida la response 
    //Tratar la indormación 
    h.onload = function(){
        if(h.status === 200){
            resolve(h.responseText)
        }else{
            rejected(h.status)
        }

    }
    })
    return promise
}

function exito(data){
    const tipos = JSON.parse(data)
    console.log(tipos)
}

function fallo(status){
    console.log(status)
}

//Invocar get_data 
get_data(url).then(function(response){
    console.log(response)
    //exito(response)
}).catch(function(error){
    fallo(Error(error))
})