import './App.css'
import { Energy } from './components/energy'
import { Immunity } from './components/immunity'
import { Promo } from './components/promo'

export function App() {
  return (
    <>
      <main>
        <h1 className="main-title">FitFuel</h1>
        <Promo />
        <Energy />
        <Immunity />
      </main>
      <button className='button'>Оформить заказ(0)</button>
    </>
  )
}