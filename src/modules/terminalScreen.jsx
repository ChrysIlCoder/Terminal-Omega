import '../app.css'

export default function Screen({ children }){
    return (
        <div className='outside-border'>
            <div className='terminal'>
                {children}
            </div>
        </div>
    )
}