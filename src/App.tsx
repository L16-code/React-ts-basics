
import { Stats } from 'fs';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import User from './components/state/User';
import Counter from './components/state/Counter';

function App() {
  const PersonName={
    first:'lavish',
    last:'jain',
  }
  const nameList=[
    {
      first:"lavish",
      last:"jain"
    },
    {
      first:"la1",
      last:"ja1"
    },
    {
      first:"la2",
      last:"ja2"
    }
  ]
  return (
    <div className="App">
      {/* <Heading> dwsf</Heading>
      <Greet name='lavish' age={22} isLoggedIn={true} />
      <Person name={PersonName}/>
      <PersonList  names={nameList}  />
      <Status status='loading'/>
      <Oscar>
        <Heading>
          234
        </Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{alert("hehe it donme"+event+id)}} />
      <Input value='' handleChange={(event)=>alert(event)}/> */}
      <User />
      <Counter />
    </div>
  );
}

export default App;
