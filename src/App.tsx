import React, { useState } from 'react';

import './App.css';
import { Counter } from './Counter';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className='App'>
      <Counter value={value} setValue={setValue} />
    </div>
  );
}

export default App;
