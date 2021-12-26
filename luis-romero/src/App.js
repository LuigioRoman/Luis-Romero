import './App.css';
import './components/experiencia';
import Experiencias from './components/experiencia';

function App() {
  return (
    <div className="App">
      <button className="subtitulos"><h2>Experiencia</h2></button>
      <Experiencias/>
      <button className="subtitulos"><h2>Educacion</h2></button>
      <button className="subtitulos"><h2>Curriculum</h2></button>
    </div>
  );
}

export default App;