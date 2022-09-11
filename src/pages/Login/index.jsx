import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react';
import {LayoutComponents} from '../../components/LayoutComponents';
import useAuth from '../../hooks/useAuth'

export const Login = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = (e) => {
      if (!email | !password) {
        setError("Preencha todos os campos");
        e.preventDefault() 
        return;
      }
  
      const res = signin(email, password);
  
      if (res) {
        setError(res);
        return;
      }
      navigate("./Home")
    };
  
    
    return(

       <LayoutComponents>
        
                    { /* criação do formulário  */ }
                    <form className="login-form">

                        { /* título da tela de login  */ }
                        <span className="login-form-title"> 20 SEJA BEM VINDO!</span>
                        
                        { /* criação do input do email  */ }
                        <div className="wrap-input">
                            <input
                            className= {email !== "" ? 'has-val input' : 'input'}
                            type="email"
                            value = {email}
                            onChange = {(e) => [setEmail(e.target.value), setError("")]}
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

                        <div class="txtErr">{error}</div>
                    
                        { /* criação do botão de login  */ }
                        <div className='container-login-form.btn'>
                            <button onClick={handleLogin} className='login-form-btn'>Login</button>
                        </div>
                        
                        { /* criação do link para criar conta  */ }
                        <div className='text-center'>
                            <span className='txt1'>Não possui conta?</span>
                            <Link className='txt2' to='/Register'>Criar conta</Link>
                        </div>
                    
                    </form>
        </LayoutComponents> 
    )
}   
