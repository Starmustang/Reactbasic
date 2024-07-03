import './ToDoBusqueda.css'
import React from 'react';

function ToDoBusqueda()
{ const [valordeBusqueda, setvalordeBusqueda] = React.useState('');

  console.log('los usuarios buscan todos de ' + valordeBusqueda);

  return (
    <input 
      placeholder="Buscar tareas" 
      className="ToDoBusqueda"  
      value={valordeBusqueda}
      onChange={(event) => {
          setvalordeBusqueda(event.target.value);
    }}
    />
  );
}

export {ToDoBusqueda};