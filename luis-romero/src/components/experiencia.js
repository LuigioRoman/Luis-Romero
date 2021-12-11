import React from 'react';
import '../App.css';

const Experiencias = () => {
    return(
        <>
            <button className="subtitulos">
                <h2>Mi Experiencia</h2>
            </button>
            <Lista />
        </>
    )
}

const Lista = () => {
    return(
        <>
            <h4>{listaDeExperiencias[0].titulo}</h4>
            <div className='imagenContainerContent'></div>
            <div className='container'>
                <p className='content'>{listaDeExperiencias[0].empresa}</p>
                <p className='content'>{listaDeExperiencias[0].responsabilidades}</p>
                <p className='content'>{listaDeExperiencias[0].logros}</p>
            </div>
            <hr/>
            
            <h4>{listaDeExperiencias[1].titulo}</h4>
            <div className='container'>
                <p className='content'>{listaDeExperiencias[1].empresa}</p>
                <p className='content'>{listaDeExperiencias[1].responsabilidades}</p>
                <p className='content'>{listaDeExperiencias[1].logros}</p>
            </div>
            <hr/>
            
            <h4>{listaDeExperiencias[2].titulo}</h4>
            <div className='container'>
                <p className='content'>{listaDeExperiencias[2].empresa}</p>
                <p className='content'>{listaDeExperiencias[2].responsabilidades}</p>
                <p className='content'>{listaDeExperiencias[2].logros}</p>
            </div>
            <hr/>
        </>
    )
}


const listaDeExperiencias = [
    {
        titulo: "Puesto",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. ",
        logros: "un logro, dos logros, tres logros",
    },
    {
        titulo: "Puesto",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. ",
        logros: "un logro, dos logros, tres logros",
    },
    {
        titulo: "Puesto",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. a",
        logros: "un logro, dos logros, tres logros",
    },
]

export default Experiencias;