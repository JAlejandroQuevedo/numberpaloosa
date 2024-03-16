import React from 'react'

export const Titulo = ({ titulo, linkImg, altImg }) => {
    return (
        <>
            <nav>
                <h1>{titulo}</h1>
                <img src={linkImg} alt={altImg} />
            </nav>
        </>
    )
}
