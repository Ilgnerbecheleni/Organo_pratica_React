import Colaborador from '../Colaborador';
import './Time.css';


const Time = (props) => {
    
    const css = {backgroundColor:props.corSecundaria};
// verifica se tem colaboradores e executa o que tem apos o ( props.colaboradores.length > 0)  &&  ou ternario (cond)? se verdade : se false
    return (
       
       ( props.colaboradores.length > 0) ?
       
       <section className='time' style={css}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        <div className='colaboradores'>
        {
        props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria}/>)
    }
        </div>
   
    </section> :''
 
    )
}


export default Time;