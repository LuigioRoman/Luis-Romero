import React from 'react';
import '../App.css';

const Experiencias = () => {
    return(
        <>
            <ListarExperiencias listaDeExperiencias={listaDeExperiencias} />
        </>
    )
}

const MostrarExperiencias = ({elementoDeExperiencia}) => {
    
    return(
        <>
            <h4>{elementoDeExperiencia.titulo}</h4>
            <div className='exp'>
                <div className='imagenContainerContent exp-content'></div>
                <div className='container exp-content'>
                    <p className='content'>{elementoDeExperiencia.empresa}</p>
                    <p className='content'>{elementoDeExperiencia.responsabilidades}</p>
                    <p className='content'>{elementoDeExperiencia.logros}</p>
                </div>
            </div>
            <hr/>
            </>
    )
}

const ListarExperiencias = ({listaDeExperiencias}) => {
    return(
        <div>
            {listaDeExperiencias.map(elementoDeExperiencia =>(
                <MostrarExperiencias key={elementoDeExperiencia.id} elementoDeExperiencia={elementoDeExperiencia}/>
            ))}
        </div>
    )
}

const listaDeExperiencias = [
    {
        id: 1,
        titulo: "Puesto 1",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. ",
        logros: "un logro, dos logros, tres logros",
    },
    {
        id: 2,
        titulo: "Puesto 2",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. ",
        logros: "un logro, dos logros, tres logros",
    },
    {
        id:3,
        titulo: "Puesto 3",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. a",
        logros: "un logro, dos logros, tres logros",
    },
    {
        id:4,
        titulo: "Puesto 4",
        empresa: "Empresa, Contacto",
        responsabilidades: "Nulla imperdiet nisl enim, eu commodo augue iaculis et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Mauris vel odio felis. Ut id quam egestas, viverra nunc et, rutrum velit. Ut dignissim mattis magna a malesuada. Quisque ultrices velit sem, eget lobortis ligula aliquet sed. Quisque interdum condimentum viverra. a",
        logros: "un logro, dos logros, tres logros, cuatro logros",
    },
]

export default Experiencias;