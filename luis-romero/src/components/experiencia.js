import React from 'react';
import '../App.css';

const Experiencias = () => {
    return(
        <>
            <div className="subTitulos">
                <h2>Mi Experiencia</h2>
            </div>
            <Lista />
        </>
    )
}

const Lista = () => {
    return(
        <>
            <h4>{listaDeExperiencias[1].titulo}</h4>
        </>
    )
}
const listaDeExperiencias = [
    {
        titulo: "Mi primera experiencia",
        empresa: "cualquiera",
        responsabilidades: "Hols hola hola hola",
        logros: "un logro, dos logros, tres logros",
    },
    {
        titulo: "Mi segunda experiencia",
        empresa: "cualquiera",
        responsabilidades: "Hola hola hola hola",
        logros: "un logro, dos logros, tres logros",
    },
    {
        titulo: "Mi tercera experiencia",
        empresa: "cualquiera",
        responsabilidades: "Hola hola hola hola",
        logros: "un logro, dos logros, tres logros",
    },
]

console.log(listaDeExperiencias);

export default Experiencias;