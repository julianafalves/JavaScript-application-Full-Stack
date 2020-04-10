import React from 'react'
import logoImg from '../../assets/logo.svg' //logo
import { Link } from 'react-router-dom' //escrever o que é isso aq
import { FiPower } from 'react-icons/fi'
import './styles.css'
export default function Profile (){
    return(
        <div className='profile-container'>
            <header>
                <img src= {logoImg} alt="Be the Hero" />
                <span>Bem vinda, APAD</span>

                <Link className ='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button type ='button'>
                    <FiPower size='18' color='#E02041' />
                </button>

            </header>
        </div>
    )
}