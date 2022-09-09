import { AppRouter } from './routes';
import './assets/global.css';
import { AuthProvider } from './contexts/auth';

export const App = () => {

  return (
    <AuthProvider>
       <AppRouter />
    </AuthProvider>

  )
}  