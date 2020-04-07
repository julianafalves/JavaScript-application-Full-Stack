import React from 'react'

export default function Header( {children}){ //props é propriedade
    return(
        <header>
            <h1> {children}</h1>
        </header>
    )
}