import React, { useEffect, useState } from 'react'
import { Juego } from './Juego'

export const JuegoContainer = () => {
    const [userInput, setUserInput] = useState({
        numberIn: '',
    })
    const [userInfoData, setUserInfoData] = useState('');
    const [showUserInfo, setshowUserInfo] = useState('');
    const sendAll = (e) => {
        e.preventDefault()
        setUserInfoData(userInput.numberIn)
        setUserInput({
            numberIn: ''
        })
    }
    useEffect(() => {
        if (userInfoData !== '') {
            let num1 = 1;
            let num2 = 10;
            let miNumeroRandom = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
            if (parseInt(miNumeroRandom) === parseInt(userInfoData)) {
                setshowUserInfo('¡El numero ingresado es correcto!');
            } else {
                setshowUserInfo('El numero ingresado es incorrecto');
            }
            console.log(miNumeroRandom);
        }
    }, [userInfoData]);
    const catchContent = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    }
    const handleKeyDown = (e) => {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Delete', ' '];
        const isAllowed = allowedKeys.includes(e.key) || e.key === 'Backspace'
        if (!isAllowed) {
            e.preventDefault()
        }
    }
    return (
        <>
            <Juego
                sendAll={sendAll}
                catchContent={catchContent}
                showUserInfo={showUserInfo}
                handleKeyDown={handleKeyDown}
                userInput={userInput} />
        </>
    )
}
