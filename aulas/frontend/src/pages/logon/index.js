import React from 'react'
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'


import './styles.css'
import LogoImg from '../../assets/logo.svg'
import HeroesImg from '../../assets/heroes.png'


export default function Logon(){
    return(
        <div className="logon-container">
            <section className = "form">
                <img src={LogoImg} alt="Logo" /> 

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder='Sua ID' />

                    <button className="button" type='submit'>Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" /> 
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        
            <img src={HeroesImg} alt="Heroes" />  

        </div>

    )
}