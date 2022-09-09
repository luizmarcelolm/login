import { useNavigate} from 'react-router-dom'
import {LayoutComponents} from '../../components/LayoutComponents';
import useAuth from "../../hooks/useAuth";

export const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
  
    return(

       <LayoutComponents>    
                    { /* criação do formulário home  */ }
                    <form className="login-form">

                        { /* título da tela de home  */ }
                        <span className="login-form-title">VOCÊ ESTA LOGADO !!!</span>
              
                        { /* link para sair */ }
                        <div className='text-center'>
                          <div Text="Sair" onClick={() => [signout(), navigate("/Home")]}>
                             Sair
                          </div>
                        </div>
                
                    </form>
        </LayoutComponents> 
    )
}   
