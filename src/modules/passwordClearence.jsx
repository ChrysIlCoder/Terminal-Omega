import '../app.css'
import { STYLES } from './utils/utils.jsx'
import { useState } from 'react'

export default function PasswordRequest({ sent, setSent }){
    const [password, setPassword] = useState('')

    function handlePasswordSubmit(event){
        event.preventDefault()
        password.trim() != '' ? setSent(true) : alert('Però deve scrivere qualcosa signò')
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className='terminal-container'>
            <p style={STYLES.colors.red} className='error-codes'>
                <span>* Tentativo di acceso rilevato *</span>
                <span>* Inserire la password *</span>
                <span style={STYLES.colors.gray}>(Puoi inserire quello che vuoi)</span>
            </p>
            <form className='terminal-user-input' onSubmit={handlePasswordSubmit}>
                <label style={STYLES.colors.lightGreen}>Password:</label>
                <input style={STYLES.colors.lightGreen} onChange={handlePasswordChange} type='password' autoFocus maxLength={12} disabled={sent ? true : false}/>
            </form>
        </div>
    )
}