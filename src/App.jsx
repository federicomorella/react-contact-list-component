import { useState } from 'react'
import './App.css'
import {Contacts} from './components/Contacts/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';
function newContact(name,email){
  return{name,email}
}
const contacts=[
  newContact('fede','fede@pp.com'),
  newContact('jesi','jesi@pp.com'),
  newContact('pancho','pancho@pp.com'),
  newContact('pepe','pepe@pp.com'),
  newContact('fede','fede@pp.com'),
  newContact('jesi','jesi@pp.com'),
  newContact('pancho','pancho@pp.com'),
  newContact('pepe','pepe@pp.com'),
  newContact('fede','fede@pp.com'),
  newContact('jesi','jesi@pp.com'),
  newContact('pancho','pancho@pp.com'),
  newContact('pepe','pepe@pp.com'),
  newContact('fede','fede@pp.com'),
  newContact('jesi','jesi@pp.com'),
  newContact('pancho','pancho@pp.com'),
  newContact('pepe','pepe@pp.com'),
]

function App() {

  return (
    <>
      <Contacts 
        onAdd={(username)=>alert(`adding contact ${username}`)}
        onRemove={(i)=>alert(`removing contact ${contacts[i].name}`)}
        onSelect={(i)=>alert(`selecting contact ${contacts[i].name}`)}
        contacts={contacts}/>
    </>
  )
}

export default App
