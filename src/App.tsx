
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
// import User from './components/state/User';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import MutableRef from './components/ref/MutableRef';
import DomRef from './components/ref/DomRef';
import React, { useState, useCallback } from 'react';
import Item from './components/Callback/Item';


function App() {
  const PersonName = {
    first: 'lavish',
    last: 'jain',
  }
  const nameList = [
    {
      first: "lavish",
      last: "jain"
    },
    {
      first: "la1",
      last: "ja1"
    },
    {
      first: "la2",
      last: "ja2"
    }
  ]
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);

  // useCallback to memoize the handleItemClick function
  const handleItemClick = useCallback((item: string) => {
    console.log(`You clicked on ${item}`);
  }, []);
  return (
    <div className="App">


      {/* START PROPS */}
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
      {/* END PROPS */}

      {/* IT IS EXAMPLE OF USE REDUCER JUST UNCOMMENT IT */}
      {/* <User />
      <Counter /> */}
      {/* END USE REDUCER */}


      {/* START USE CONTEXT */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* END USE CONTEXT */}

      {/* START USE REF */}
      {/* <MutableRef />
      <DomRef /> */}
      {/* END USE REF */}
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {items.map(item => (
          <Item key={item} item={item} onClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
}

export default App;
