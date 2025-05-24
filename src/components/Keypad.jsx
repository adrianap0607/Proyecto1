import Button from './Button'
import SpecialButton from './SpecialButton' 
export default function Keypad({ onKeyPress }) {
  const keys = ['CLR', 'DEL', 'mod', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '=', '+/-']
  return (
    <div className="keypad">
      {keys.map(k => {
        const isOperator = ['+', '-', 'x', '÷', 'mod', '+/-'].includes(k)
        const isSpecial = ['CLR', 'DEL', '='].includes(k)
        if (isSpecial) {
          return <SpecialButton key={k} label={k} onClick={onKeyPress} />
        }
        const className = isOperator ? 'operation' : ''
        return <Button key={k} label={k} onClick={onKeyPress} className={className} />
      })}
    </div>
  )
}