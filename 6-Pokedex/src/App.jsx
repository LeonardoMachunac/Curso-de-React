import { useState } from 'react';
import './App.css';
import { TopBar } from './components/TopBar';
import { PokeList } from './components/PokeList';
import { BottonBar } from './components/BottonBar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TopBar/>
      <PokeList />
      <BottonBar/>
    </div>

  )
}

export default App;
