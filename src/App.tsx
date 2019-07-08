import React from 'react';
import './App.scss';
import { Button } from './components/button';
import { Input } from './components/input';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button></Button>
      <Input></Input>
      <Input></Input>
    </div>
  );
}

export default App;
