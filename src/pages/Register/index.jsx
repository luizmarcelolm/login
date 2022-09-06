import {Link} from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"


export const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <LayoutComponents>
            { /* criação do formulário  */ }
            <form className="login-form">
                        <span className="login-form-title">CADASTRO</span>
                        
                        { /* criação do input nome  */ }
                        <div className="wrap-input">
                            <input
                            className= {name !== "" ? 'has-val input' : 'input'}
                            type="name"
                            value = {name}
                            onChange = {e => setName(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Nome'></span>
                        </div>

                        { /* criação do input email  */ }
                        <div className="wrap-input">
                            <input
                            className= {email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>
                        
                        { /* criação do input senha  */ }
                        <div className="wrap-input">
                            <input 
                            className= {password !== "" ? 'has-val input' : 'input'} 
                            type="password"
                            value={password}
                            onChange = {e => setPassword(e.target.value)}
                            />
                            <span className='focus-input' data-placeholder='Password'></span>
                        </div>

                        { /* criação do botão de cadastrar  */ }
                        <div className='container-login-form.btn'>
                            <button className='login-form-btn'>CADASTRAR</button>
                        </div>
                        
                        { /* criação do link para retornar a tela de login */ }
                        <div className='text-center'>
                            <span className='txt1'>Já possui conta?</span>
                            <Link className='txt2' to='/login'>Acessar</Link>
                        </div>
            </form> 
        </LayoutComponents>
    )
}