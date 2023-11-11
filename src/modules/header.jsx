import logo from '../assets/favicon.png'
import '../app.css'
import './utils/utils.css'


export default function Header(){
    return (
        <div className='upper-terminal-omega'>
            <img src={logo} alt='Omega Logo' className='terminal-omega-logo'/>
            <p className='terminal-info'>
                <span>Ωmega Terminal - Reserved Information Center </span><br/>
                <span>@InService From - 2017/2023</span><br/>
                <span className='warning-text'>* USE IS ONLY PERMITTED BY LEVEL 5 OR HIGHER PERSONAL. EVERY OFFENDER WILL BE TERMINATED *</span>
            </p>
        </div>
    )
}