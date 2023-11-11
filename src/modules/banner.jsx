import '../app.css'
import { STYLES } from './utils/utils.jsx'

export default function Banner() {
    const asciiArt = ` .d88888b.  888b     d888 8888888888 .d8888b.         d8888 
d88P" "Y88b 8888b   d8888 888       d88P  Y88b       d88888 
888     888 88888b.d88888 888       888    888      d88P888 
888     888 888Y88888P888 8888888   888            d88P 888 
888     888 888 Y888P 888 888       888  88888    d88P  888 
888     888 888  Y8P  888 888       888    888   d88P   888 
Y88b. .d88P 888   "   888 888       Y88b  d88P  d8888888888 
 "Y88888P"  888       888 8888888888 "Y8888P88 d88P     888`;

    return (
        <pre className='banner'>
            {asciiArt} <span className='banner-ascii-span'>Secure. Contain. Protect.</span><br/>
            <p className='banner-text'>
                - Benvenuto nel terminal di Omega. Digita 'commands' per sapere la lista dei comandi<br/>
                - Creato da <span style={STYLES.colors.lightGreen}>Astronaut||Gary</span> (Christian Boffa)<br/>
                - Mi sembra giusto citare a chi mi sono ispirato: <a href="https://term.m4tt72.com/" target='_blank'>https://term.m4tt72.com/</a>
            </p>
        </pre>
    )
}