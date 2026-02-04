import './App.css';

import { useState } from 'react';

import { Button } from './components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>uday</h1>
      <Button>click me</Button>
    </>
  );
}

export default App;
