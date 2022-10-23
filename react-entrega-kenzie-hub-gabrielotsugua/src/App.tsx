import './App.css';
import "./styles/Variables/style.css"
import { StyleReset } from './styles/StyleReset';
import MainRoutes from './routes';

function App() {

  return (
    <>
      <StyleReset />
      <MainRoutes />
    </>
  )
}

export default App