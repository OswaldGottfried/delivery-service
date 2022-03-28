import { DeliveryForm } from './components/DeliveryForm/DeliveryForm'
import style from './App.module.css'
import { Header } from './components/Header/Header'

const App: React.FC = () => (
  <>
    <Header />
    <main className={style.center}>
      <DeliveryForm />
    </main>
  </>
)

export default App
