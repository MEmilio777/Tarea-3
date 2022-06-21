/*


function cargar()
{
    fetch("http://www.raydelto.org/agenda.php")
        .then(function(respuesta){
        return respuesta.json();
    }).then(function(respuesta){
        var contacto = respuesta[3];
        divCuerpo.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
    });
}


function C(){

    const res = fetch("http://www.raydelto.org/agenda.php");
    console.log(res)
}


let url = "http://www.raydelto.org/agenda.php";
            var divCuerpo = document.getElementById('cuerpo');
            fetch(url)
            .then( response => response.json() )
            .then( cuerpo => mostrarData(cuerpo) )
            .catch( error => console.log(error) )

        const mostrarData = (cuerpo) => {
            console.log(cuerpo)
            let body = ""
            for (var i = 0; i < data.length; i++) {      
               body+=`<tr><td>${cuerpo[i].id}</td><td>${cuerpo[i].name}</td><td>${cuerpo[i].email}</td></tr>`
            }
            document.getElementById('cuerpo').innerHTML = body
            //console.log(body)
        }


        */





let url = "http://www.raydelto.org/agenda.php";
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].nombre}</td><td>${data[i].apellido}</td><td>${data[i].telefono}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}

/*
let formulario = document.getElementById('datos_formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let datos = new FormData(formulario);

    let peticion = {
        method: 'POST',
        body: datos,
    }

    fetch("http://www.raydelto.org/agenda.php", peticion)
        .then(respuesta => respuesta.json())
        .then(respuesta => {

        }).catch(error => console.log('error', error));

});

*/


const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit',enviarinfo);

function enviarinfo(e){
    e.preventDeault();

    const data = FormData(formulario);

    fetch('http://www.raydelto.org/agenda.php',{
        method: 'POST',
        body: data
    })

    .then(resultado => resultado.json())
    .then(datos => {
        mostrarInfo(datos)
    })
}




