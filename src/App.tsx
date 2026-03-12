import './App.css'
import NavBar from './components/NavBar'
import Alert from './components/Alert'
import { useState } from "react";


const info = ['About', 'Stack', 'Hobbies', 'Goals']

function App() {
  const [activeTab, setActiveTab] = useState('About')
  return (
    <>
    <div >
      <NavBar items={info} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div>
        {activeTab === 'About' && <div>Contenido de About</div>}
        {activeTab === 'Stack' && <Alert tab={'Stack'}/>}
        {activeTab === 'Hobbies' && <Alert tab={'Hobbies'}/>}
        {activeTab === 'Goals' && <Alert tab={'Goals'}/>}
      </div>
    </div>
    </>
  )
}

export default App
