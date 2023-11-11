import '../app.css'
import { STYLES } from  './utils/utils.jsx'
import { useState, useEffect, useRef } from 'react'
import { ChiSono, CommandsList, CosaFaccio, NotFound, RandomScp, Salve, commandsList } from './commands'

export default function AdminPanel({ erase, setErase }){
    const inputRef = useRef(null)
    const [canUse, setCanUse] = useState(false)
    const [command, setCommand] = useState('')
    const [renderComponent, setRenderComponent] = useState('')
    const [renderInput, setRenderInput] = useState('')

    // Anti-Focus System
    useEffect(() => {
        inputRef.current.focus();
        
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
              inputRef.current.focus();
            }
          };
      
          document.addEventListener('click', handleClickOutside);
      
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, []);

    function handleCommandSubmit(event){
        event.preventDefault()
        
        // Check di tutti i comandi con uno switch
        switch (command.trim()) {
            case 'commands':
                setRenderComponent(<CommandsList/>)
                break
            case 'chisono':
                setRenderComponent(<ChiSono/>)
                break
            case 'cosafaccio':
                setRenderComponent(<CosaFaccio/>)
                break
            case 'randomscp':
                setRenderComponent(<RandomScp/>)
                break
            case 'salve':
                setRenderComponent(<Salve/>)
                break

            case '':
                break

            default:
                setRenderComponent(<NotFound/>)
                break
        }
        setCanUse(canUse => true)
        setRenderInput(<AdminPanel/>)
    }

    function handlePasswordChange(event){
        setCommand(event.target.value)
    }

    return (
        <>
            <div className='terminal-user-input'>
                <label className='terminal-user'>
                    <span style={STYLES.colors.green}>admin</span>
                    <span style={STYLES.colors.gray}>@</span>
                    <span style={STYLES.colors.purple}>omega.site.02</span>
                    <span style={STYLES.colors.gray}>&t-:</span>
                </label>
                <form onSubmit={handleCommandSubmit}>
                    <input type='text' style={commandsList.includes(command) ? STYLES.colors.lightGreen : STYLES.colors.lightRed} onChange={handlePasswordChange} value={command} autoFocus disabled={canUse} ref={inputRef} spellCheck='false'/>
                </form>
            </div>
            <div className='command-container'>
                {renderComponent}
            </div>
            {renderInput}
        </>
    )
}