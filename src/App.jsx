// Conecta Display, Keypad y la lógica
import Display from './components/Display'
import Keypad from './components/Keypad'
import useCalculatorLogic from './hooks/LogicaCalculadora'
import './styles/main.css'

export default function App() {
  const { display, handleKey } = useCalculatorLogic()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onKeyPress={handleKey} />
    </div>
  )
}