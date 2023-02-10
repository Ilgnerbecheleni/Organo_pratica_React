import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
   
    const aoMudar = (evento) => {
        props.AoAlterado(evento.target.value);// funcao passada pelo props
         
       
     }

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoMudar} required={props.required} value={props.valor}>
                <option></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa