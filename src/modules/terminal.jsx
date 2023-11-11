import '../app.css'
import './utils/utils.css'
import { Liner } from './utils/utils.jsx'
import Banner from './banner.jsx'
import AdminPanel from './adminInput'


export default function Terminal({ sent, component }){
    return sent ? (
        <div className='terminal-container'>
            <Banner/>
            <Liner/>
            <AdminPanel/>
            {component}
        </div>
    ) : null
}