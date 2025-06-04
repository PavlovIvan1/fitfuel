import './App.css'
import { Energy } from './components/energy'
import { Focus } from './components/focus'
import { Promo } from './components/promo'
import { Sport } from './components/sport'

export function App() {
  return (
    <>
      <main>
        <h1 className="main-title">FitFuel</h1>
        <Promo />
        <Energy />
        <Focus />
        <Sport />
      </main>
      <button className='button'>Оформить заказ(0)</button>
    </>
  )
}