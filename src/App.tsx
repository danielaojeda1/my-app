import './App.css'
import NavBar from './components/NavBar'
import About from './tabs/About'
import Stack from './tabs/Stack'
import Hobbies from './tabs/Hobbies'
import Goals from './tabs/Goals'

import { useState } from "react";


const info = ['About', 'Stack', 'Hobbies', 'Goals']

function App() {
  const [activeTab, setActiveTab] = useState('About')
  return (
    <>
    <div >
      <NavBar items={info} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div>
        {activeTab === 'About' && <div><About/></div>}
        {activeTab === 'Stack' && <div><Stack/></div>}
        {activeTab === 'Hobbies' && <div><Hobbies/></div>}
        {activeTab === 'Goals' && <div><Goals/></div>}
      </div>
    </div>
    </>
  )
}

export default App
