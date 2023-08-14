
import './Form.css'
import{useState} from 'react'

function Form(){

function validarEndereco(e){
    e.preventDefault()
    console.log(rua)
 }

 const [rua,setRua] = useState()
    return(
    <div className="App">      
        <div className="col2">
          <form onSubmit={validarEndereco} action='#'>
            <label>Rua: </label>
            <input type="text">            
            </input>
            <label>CEP: </label>
            <input 
            type="text"
            id="rua"
            name="rua"
            onChange ={(e) => setRua(e.target.value)}
            ></input> 
            <label>Numero: </label>
            <input 
            type="text"></input> 
            <input type='submit' value="Enviar"></input>
          </form>
        </div>
    </div>
    );
}
export default Form;