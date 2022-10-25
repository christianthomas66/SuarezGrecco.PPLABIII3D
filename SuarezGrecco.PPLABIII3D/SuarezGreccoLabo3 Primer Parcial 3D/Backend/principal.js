import { crearArticulo } from "./articulo.js";

const anuncios = JSON.parse(localStorage.getItem("vehiculos")) || [];
console.log(anuncios);

if(anuncios.length != 0){
    crearArticulo(anuncios);
}