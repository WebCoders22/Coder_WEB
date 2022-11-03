import React from 'react'
import ClientesLogin from '../Image/ClientesLogin.png';
import '../CrearingresarCliente/CrearIngresarCliente.css';
import { Link } from 'react-router-dom';
import '../CrearingresarCliente/CrearIngresarCliente.css';

export const CrearIngresarClinete = () => {
  return (
   
    <div className='main_container'>
        <div className='container_img'>
            <img className='Tendero' src={ClientesLogin}></img>
        </div>
        <div className='container_btn'>
            <Link to={'/crearusuario'}>
                <button className='button_products'>Crear Cuenta</button>
            </Link>
            <Link to={'/logincliente'}>
                <button className='button_products'>Ingresar</button>
            </Link>
        </div>
    </div>

  )
}