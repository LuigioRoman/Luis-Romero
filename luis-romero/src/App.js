import React, {useState} from 'react';
import './App.css';
import './components/experiencia';
import Experiencias from './components/experiencia';
import Educacion from './components/educacion';
import Curriculum from './components/curriculum';

const Dislplay = (props) => {

  if(props.section===0){
    return(
      <>
        <Experiencias/>
      </>
    )
  }else if(props.section===1){
    return(
      <>
        <Experiencias/>
      </>
    )
  }else if(props.section===2){
    return(
      <>
        <Educacion/>
      </>
    )
  }else if(props.section===3){
    return(
      <>
        <Curriculum/>
      </>
    )
  }
}

function App() {
  const [section, setSection] = useState(0)

  const exp = () => setSection(1)
  const edu = () => setSection(2)
  const cv = () => setSection(3)

  return (
    <>
    <div className="App">
      <button className="subtitulos" onClick={exp}><h2>Experiencias</h2></button>
      <button className="subtitulos" onClick={edu}><h2>Educacion</h2></button>
      <button className="subtitulos" onClick={cv}><h2>Curriculum</h2></button>
    </div>
    <div>
      <Dislplay section={section}/>
    </div>
    </>
  )
}

export default App;