import {Link} from 'react-router-dom'
import {useState} from 'react';
import {LayoutComponents} from '../../components/LayoutComponents';
import {validEmail, validPassword} from '../../assets/regex';

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [inputEmailErr, setInputEmailErr] = useState(false)
    const [inputPasswordErr, setInputPasswordErr] = useState(false)
  
    
    const validate = (e) => {
        
        if (! validEmail.test(email)){
             setInputEmailErr(true)         
        } else {
               setInputEmailErr(false)
            }
        if (! validPassword.test(password)){
              setInputPasswordErr(true) 
        } else {
               setInputPasswordErr(false)
            }
        if ( validPassword.test(password) &&  validEmail.test(email)){
            return alert("Login feito com sucesso!!!") 
        }
        e.preventDefault()  
    }    
    
    return(

       <LayoutComponents>
        
                    { /* criação do formulário  */ }
                    <form className="login-form">

                        { /* título da tela de login  */ }
                        <span className="login-form-title">SEJA BEM VINDO!</span>
                        
                        { /* criação do input do email  */ }
                        <div className="wrap-input">
                            <input
                            className= {email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>
                        
                        { /* criação do input da senha  */ }
                        <div className="wrap-input">
                            <input 
                            className= {password !== "" ? 'has-val input' : 'input'} 
                            type="password"
                            value={password}
                            onChange = {e => setPassword(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Password'></span>
                        </div>
                        <div> {inputEmailErr && <span className="txtErr">*Email inválido.</span>}</div>
                       
                        <div>{inputPasswordErr && <span className="txtErr">*Senha deve ter 6 digitos contendo letra maiúscula, número e um caractere especial.</span>}</div>
                        
                        { /* criação do botão de login  */ }
                        <div className='container-login-form.btn'>
                            <button onClick={validate} className='login-form-btn'>Login</button>
                        </div>
                        
                        { /* criação do link para criar conta  */ }
                        <div className='text-center'>
                            <span className='txt1'>Não possui conta?</span>
                            <Link className='txt2' to='/register'>Criar conta</Link>
                        </div>
                    
                    </form>
        </LayoutComponents> 
    )
}   
