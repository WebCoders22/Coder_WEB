import React from 'react'
import { Link } from 'react-router-dom';
import Tendero from '../Image/Tendero.png';
import "../CrearIngresar/CrearIngresar.css"

export const CrearIngresar = () => {
    return (
    
            <div className='main_container'>
                <div className='container_img'>
                    <img className='Tendero' src={Tendero}></img>
                </div>
                <div className='container_btn'>
                    <Link to={'/creartendero'}>
                        <button className='button_products'>Crear Cuenta</button>
                    </Link>
                    <Link to={'/IngresarTendero'}>
                        <button className='button_products'>Ingresar</button>
                    </Link>
                </div>
            </div>
        
    )
}
