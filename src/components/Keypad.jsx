// Representa todo el teclado con números y operaciones
import Button from './Button'

export default function Keypad({ onKeyPress }) {
const keys = ['CLR','DEL','mod','÷','7','8','9','x','4','5','6','-','1','2','3','+','.','0','=','+/-']
  return <div className="keypad">
    {keys.map(k => {
      const isOperator = ['+', '-', 'x', '÷', 'mod', '+/-'].includes(k)
      const isEqualGroup = ['CLR', 'DEL', '='].includes(k)
      const className = isEqualGroup ? 'equal' : isOperator ? 'operation' : ''
      return <Button key={k} label={k} onClick={onKeyPress} className={className} />
    })}
  </div>
}