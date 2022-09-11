import {Link} from 'react-router-dom'
import {LayoutComponents} from '../../components/LayoutComponents';


export const Home = () => {

  
    return(

       <LayoutComponents>    
                    { /* criação do formulário home  */ }
                    <form className="login-form">

                        { /* título da tela de home  */ }
                        <span className="login-form-title2">Usuário Logado !!!</span>
              
                        { /* link para sair */ }
                        <div className='text-center'>
                           <Link className='txt2' to='/Login'>Sair</Link>   
                        </div>
                
                    </form>
        </LayoutComponents> 
    )
}   
