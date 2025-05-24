import { renderHook, act } from '@testing-library/react'
import useCalculatorLogic from '../hooks/LogicaCalculadora'
import { it, expect, describe } from '@jest/globals'

describe('useCalculatorLogic - operaciones matemáticas', () => {
  it('realiza suma', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('3'))
    act(() => result.current.handleKey('+'))
    act(() => result.current.handleKey('4'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('7')
  })

  it('realiza resta con resultado negativo', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('2'))
    act(() => result.current.handleKey('-'))
    act(() => result.current.handleKey('5'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('ERROR')
  })

  it('realiza multiplicación', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('5'))
    act(() => result.current.handleKey('x'))
    act(() => result.current.handleKey('5'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('25')
  })

  it('realiza división correctamente (9 ÷ 3 = 3)', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('9'))
    act(() => result.current.handleKey('÷'))
    act(() => result.current.handleKey('3'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('3')
  })

  it('realiza operación módulo ', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('1'))
    act(() => result.current.handleKey('0'))
    act(() => result.current.handleKey('mod'))
    act(() => result.current.handleKey('3'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('1')
  })

  it('muestra ERROR si el resultado supera el límite máximo ', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    '999999999'.split('').forEach(d => act(() => result.current.handleKey(d)))
    act(() => result.current.handleKey('+'))
    act(() => result.current.handleKey('1'))
    act(() => result.current.handleKey('='))
    expect(result.current.display).toBe('ERROR')
  })

  it('no permite más de 9 caracteres en pantalla', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    for (let i = 0; i < 11; i++) {
      act(() => result.current.handleKey('1'))
    }
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('borra el último dígito con DEL', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('8'))
    act(() => result.current.handleKey('5'))
    act(() => result.current.handleKey('DEL'))
    expect(result.current.display).toBe('8')
  })

  it('limpia todo con CLR', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('9'))
    act(() => result.current.handleKey('+'))
    act(() => result.current.handleKey('1'))
    act(() => result.current.handleKey('CLR'))
    expect(result.current.display).toBe('0')
  })

  it('permite ingresar punto decimal', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('3'))
    act(() => result.current.handleKey('.'))
    act(() => result.current.handleKey('1'))
    expect(result.current.display).toBe('3.1')
  })

  it('invierte signo con +/-', () => {
    const { result } = renderHook(() => useCalculatorLogic())
    act(() => result.current.handleKey('6'))
    act(() => result.current.handleKey('+/-'))
    expect(result.current.display).toBe('-6')
    act(() => result.current.handleKey('+/-'))
    expect(result.current.display).toBe('6')
  })
})