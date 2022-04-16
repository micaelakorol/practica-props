import React from 'react'
import '../stylos/testimonio.css'
const Testimonio = (props) => {

  //1- creamos un componente dinamico con props: *2- Asignamos los props donde queremos usarlos:
  //3-el componente que lo renderiza (a testimonio) debe crear las props (App)
  return (
    <>
<div className='contenedor-testimonio'>
<img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="img" className='imagen-testimonio' />
 <div className='contenedor-texto'>
<p className='nombre'><strong>{props.nombre} </strong>en {props.pais}</p>
<p className='cargo'>{props.cargo} en <strong>{props.empresa}</strong></p>

<p className='texto'>"{props.testimonio}"</p>
</div>
</div>

    </>
  )
}

export default Testimonio