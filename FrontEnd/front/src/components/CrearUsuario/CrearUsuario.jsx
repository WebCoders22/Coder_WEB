import React from 'react'
import { Link } from 'react-router-dom'
import logincliente from '../Image/logincliente.png';
import "../CrearUsuario/CrearUsuario.css"


export const CrearUsuario = () => {
  return (
    <div className='container'>
        <div className='container_login'>
            <img className='loginCliente' src={logincliente}></img>
        </div>
        <div className='login'>
            <input className="textField" type="text" placeholder='Telefono' />
            <input className="textField" type="text" placeholder='Nombre Completo' />
            <input className="textField" type="text" placeholder='Dirección' />
            <input className="textField" type="text" placeholder='Correo Electronico' />
            <input className="textField" type="text" placeholder='Crear Contraseña' />
            <Link to={'/homecliente'}><button className="btn" type='submit'>
                Enviar
            </button></Link>

        </div>
    </div>
  )
}
