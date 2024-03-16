import React from 'react'

export const Juego = ({ sendAll, catchContent, showUserInfo, handleKeyDown, userInput }) => {
    return (
        <div className='juego'>
            <form onSubmit={sendAll} className='form'>
                <label htmlFor="numberIn">Ingresa un numero del 1 al 10</label>
                <input
                    id='numberIn'
                    type='text'
                    value={userInput.numberIn}
                    name="numberIn"
                    onChange={catchContent}
                    onKeyDown={handleKeyDown}
                />
                <button type='submit'>Enviar</button>
            </form>
            <div className='showUser'>
                {showUserInfo ? <h1>{showUserInfo}</h1> : ''}
            </div>
        </div>
    )
}
