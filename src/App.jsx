import { useState } from 'react'
import './App.css'
import {Contacts} from './components/Contacts/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NOMBRES} from '../nombres.js'
var contacts=NOMBRES.map(e=>{return {name:e}})

function App() {

  const [contact, setContact] = useState('')
  const removeContact=(i)=>{
    contacts.splice(i,1)
  }

  const addContact=(username)=>{
    contacts.push({name:username})
    contacts.sort((a,b)=>(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase())?-1:1)
  }

  return (
    <>
      <p>{`Selected contact: ${contact}`}</p>
      <Contacts 
        onAdd={addContact}
        onRemove={removeContact}
        onSelect={(i)=>setContact( contacts[i].name)}
        contacts={contacts}/>
    </>
  )
}

export default App
