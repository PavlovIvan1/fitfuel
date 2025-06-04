import './App.css'
import { Energy } from './components/energy'
import { Immunity } from './components/immunity'
import { Promo } from './components/promo'

export function App() {

  return (
    <>
      <h1 className="main-title">FitFuel</h1>
      <Promo />
      <Energy />
      <Immunity />
      <button className='button' style={
        {
          marginTop: '60px'
        }
      }>Оформить заказ(0)</button>
    </>
  )
}