// Maneja la lógica de cálculo y el estado del display
import { useState } from 'react'

export default function useCalculatorLogic() {
  const [display, setDisplay] = useState('0')
  const [value, setValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [reset, setReset] = useState(false)

  const MAX = 999999999

  const updateDisplay = (input) => {
    if (display === 'ERROR') return
    if (reset) {
      setDisplay(input)
      setReset(false)
    } else if (display.length < 9) {
      setDisplay(display === '0' ? input : display + input)
    }
  }

  const calculate = (a, b, op) => {
    a = parseFloat(a)
    b = parseFloat(b)
    let result = 0
    if (op === '+') result = a + b
    if (op === '-') result = a - b
    if (op === 'x') result = a * b
    if (op === '÷') result = a / b
    if (op === 'mod') result = a % b
    if (result < 0 || result > MAX) return 'ERROR'
    const str = result.toString().slice(0, 9)
    return str
  }

  const handleKey = (key) => {
    if (key === 'CLR') {
      setDisplay('0')
      setValue(null)
      setOperator(null)
      setReset(false)
      return
    }

    if (key === 'DEL') {
      if (display === 'ERROR' || reset) {
        setDisplay('0')
        setReset(false)
      } else if (display.length === 1) {
        setDisplay('0')
      } else {
        setDisplay(display.slice(0, -1))
      }
      return
    }

    if (!isNaN(key)) return updateDisplay(key)
    if (key === '.') return display.includes('.') ? null : updateDisplay(key)
    if (key === '+/-') return display.includes('-') ? setDisplay(display.slice(1)) : setDisplay('-' + display)
    if (key === '=') {
      if (value && operator) {
        const res = calculate(value, display, operator)
        setDisplay(res)
        setValue(null)
        setOperator(null)
        setReset(true)
      }
      return
    }
    if (['+', '-', 'x', '÷', 'mod'].includes(key)) {
      if (value && operator) {
        const res = calculate(value, display, operator)
        setValue(res)
        setDisplay(res)
      } else {
        setValue(display)
      }
      setOperator(key)
      setReset(true)
    }
  }

  return { display, handleKey }
}