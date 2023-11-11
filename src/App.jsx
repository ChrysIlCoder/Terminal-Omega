import './app.css'
import './modules/utils/utils.css'
import { useState, useEffect, useRef } from 'react'
import { HeaderDivisor, Liner, STYLES } from './modules/utils/utils.jsx'
import Screen from './modules/terminalScreen.jsx'
import Header from './modules/header.jsx'
import PasswordRequest from './modules/passwordClearence'
import Terminal from './modules/terminal'

export default function App(){
    const [sent, setSent] = useState(false)

    return (
        <Screen>
            <Header/>
            <HeaderDivisor/>
            <PasswordRequest sent={sent} setSent={setSent}/>
            <Terminal sent={sent}/>
        </Screen>
    )
}
