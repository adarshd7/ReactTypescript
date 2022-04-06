import './App.css';
import {Greet} from './components/Greet'
import {Person} from './components/Person'
import {PersonList} from './components/PersonList'
import {Oscar} from './components/Oscar'
import {Heading} from './components/Heading'
import {Button}  from './components/Button'
import {Input} from './components/Input'


function App() {
  const personname={
    first:'hi',
    last:'hello'
  }

  const personNameList=[{
    first:'adarh',
    last:'D'
  },
  {first:'akshay',
  last:'V'
}
]
  return (
    <div className="App">
      <Greet name='Sadarsh'/>
      <Person name={personname}/>
      <PersonList names={personNameList}/>
      <Oscar>
        won oscar award
      </Oscar>
      <Heading>
      <Oscar>
       movie titanic
      </Oscar>
      </Heading>
      <Button  handleClick={(event,id)=>console.log('clicked',event,id)}/>
      <Input value='' handleChange={(event)=>
      console.log(event)}/>
    </div>
  );
}

export default App;
 