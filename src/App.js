import MapView from './components/MapView';
import Pastel from './components/Pastel';
import Barras from './components/Barras'
import './App.css'

function App() {

  return (
    <div>
      <div className="data">
        <MapView />
        <div>
        <Pastel />
        <Barras />
        </div>
      </div>
      <div>
        <h1>Aqui van las tablas</h1>
      </div>
    </div>
  )
}

export default App;
