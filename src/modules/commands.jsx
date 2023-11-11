import '../app.css'
import './commands.css'
import logo from '../assets/scplogo.png'
import vicenza from '../assets/immagineVicenza.jpg'
import { STYLES, ScpLiner } from "./utils/utils.jsx"
import RandomScpComponent from './randomScp'

export const commandsList = ['chisono', 'cosafaccio', 'salve', 'randomscp', 'commands']

export function ChiSono(){
    return (
        <div className='chi-sono'>
            <span style={STYLES.colors.yellow}>BUONASERA! *tavolo si rompe* *musica paperissima parte*</span><br/>
            ... Ok scusa. Andiamo avanti.<br/>
            Sono Christian Boffa, ho 16 anni e sono nato in <span style={STYLES.colors.purple}>Veneto, Vicenza</span><br/>
            Immagine esplicativa:<br/>
            <img className='vicenza' src={vicenza} alt='immagine-vicenza'/><br/>
            Sin da quando ero un piccolo nerd di 7 anni mi sono appassionato al gaming e tecnologia.<br/>
            inziando con unity e C#. Ma crescendo mi sono discostato dal mondo del game-making<br/>
            per inziare a fare siti web. Non ho mai fatto niente di grande se non qualche piccolo progettino personale<br/>
            che la maggior parte delle volte non finevo perché mi annoiavo. Ma poi ho letto che cercavate dei 'Tecnici' e ho<br/>
            deciso di farmi avanti e di almeno provarci, facendo proprio questo terminal!<br/>
            Vabbè, questo è tutto quello che ho da dire su di me (P.S non scrivo altro perché probabilmente non ve ne frega un ca**o👍)
            <ScpLiner/>
            Digita 'cosafaccio' per sapere altro. Buonagiornata Dottore!
        </div>
    )
}

export function CosaFaccio(){
    return (
        <div className="cosa-faccio">
            <p>
                Per programmare uso di solito HTML, CSS e Javscript.<br/>
                Ma da relativamente poco (3-4 mesetti) ho inziato ad usare React, una libreria javascript molto utile,<br/>
                (P.S È quella che sto usando per creare questo sito😉)<br/>
                con la quale mi sto trovando bene. Se vuoi saperne di più, ecco la loro pagina: <a href='https://it.legacy.reactjs.org/' target='_blank'>https://it.legacy.reactjs.org/</a>.<br/>
                In ogni caso, vorrei aggiungere che- BAM GRAFICHINO:
            </p>
            <div className='progress-bars'>
                <label>90% <progress className='stats' value={90} max={100}></progress> -Html</label>
                <label>75% <progress className='stats' value={75} max={100}></progress> -CSS</label>
                <label>80% <progress className='stats' value={80} max={100}></progress> -JS</label>
                <label>65% <progress className='stats' value={65} max={100}></progress> -React</label>
            </div>
            <p>
                Vistooo? Questa è quella che si chiama <span style={STYLES.colors.lightGreen}>SKILL</span>😎.<br/>
                No dai, andiamo avanti...<br/>
                Mi sento in grado di lavorare in gruppo e di unire le idee per creare un prodotto finale (Sembra che sto scrivendo un curriculum mamma mia👀)<br/>
                So creare siti seri e funzionali, se volete posso inviarvi una cartella con alcuni miei piccoli progetti.
                Questo è tutto quello che ho da dire (In breve poco, non so scivere😔). Ma come dice il mio più grande maestro:<br/>
                <span style={STYLES.colors.yellow}>"Posso portare un sacco di nuovi contenuti!!!" - Cicciogamer89</span>. Io, fossi in voi, mi fiderei👀.<br/>
                Grazie mille per la lettura e le auguro una buona giornata qui nella fondazione!
            </p>
            <div className='fondazione'>
                    <img className='scp-logo' src={logo} alt="scp-logo"/>
                    <span>OMEGA <span style={STYLES.colors.red}>S</span>.C.<span style={STYLES.colors.lightGreen}>P</span></span>
            </div>
            <ScpLiner/>
            <span>Digita 'chisono' per sapere altro. Buonagiornata Dottore!</span>
        </div>
    )
}

export function Salve(){
    return (
        <span>Salve! Spero stia avendo una fantastica giornata qui nella fondazione!</span>
    )
}

export function RandomScp() {
    return <RandomScpComponent/>
}

export function NotFound(){
    return (
        <span>Il comando non esiste, digita 'commands' per la lista di tutti i comandi</span>
    )
}

export function CommandsList(){
    return (
        <ul className="commands-list-container">
            {commandsList.map(command => {
                return <li key={crypto.randomUUID()}>{command}</li>
            })}
        </ul>
    )
}