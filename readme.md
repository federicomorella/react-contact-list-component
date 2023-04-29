
# Contacts React Component

this is a react component for listing, adding, removing and selecting contacts.

### Dependencies
* react-bootstrap

### Props
* _contacts_: list of contact objects. Each object must include a name property to display in the list.
* _onAdd(username)_: called when user search a new contact. Receives username to search
* _onRemove:(index)_: called when user removes a contact. Receives contact index
* _onSelect:(index)_: called when user selects a contact. Receives contact index



```
<Contacts 
        onAdd={(username)=>alert(`adding contact ${username}`)}
        onRemove={(i)=>alert(`removing contact ${contacts[i].name}`)}
        onSelect={(i)=>alert(`selecting contact ${contacts[i].name}`)}
        contacts={contacts}
/>

```


### Run command

```
npm install
npm run dev
```