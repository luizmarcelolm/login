import react from 'react'
import {Container, Form} from'./styles'
import Input from '../../Components/Input/index'

const Login = () => {
    return (
       <Container>
          <Form>
            <input/>
            <input/>
            <h1> Faça seu Login </h1>
          
            <div>
                <p>Não possui conta?</p>
                <a>Cadastrar</a>
            </div>
          </Form>
       </Container>
    )
}

export default Login;