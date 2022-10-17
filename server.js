/* Esta app envía petición GET al servidor en un tiempo constante para 
imprimir por consola si se ha actualizado su status */

const express = require('express');
const axios = require('axios');
const { response } = require('express');
const app = express();
const intervalo_consulta = 5000;//Este tiempo en milisegundos determina cada cuanto tiempo se envía petición
const endpoint = 'https://jsonplaceholder.typicode.com/todos/'//Aqui metemos el endpoint donde consultaremos
const respuesta = 'delectus aut autem';

//Post id tracker
const num = 2;

setInterval(() => {
    //Va incrementando las respuestas a console.log
    console.log('')
    console.log('*----*      Actualización trazabilidad SDs     *----*')
    console.log('')

    //Realiza petición GET el tiempo determinado en variable
    axios.get(
        `${endpoint}${num}`
    )

    //Imprimimos la data del objeto de respuesta
    .then(response => {
        const { id, title } = response.data
        if (title != respuesta) {
            console.log("Se actualizaron SDs")
        } else {
            console.log("No se han acutalizado SDs")
        }
        console.log('')
    })
    //Imprimimos mensaje de error si ocurre uno
    .catch(error => console.log(
        'Error en captura de data\n'
    ))
}, intervalo_consulta);