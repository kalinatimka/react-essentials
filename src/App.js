import React, { useEffect, useState } from 'react';
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState('happy');

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  return (
    <>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('happy')}>Happy</button>
      <button onClick={() => setEmotion('angry')}>Angry</button>
      <button onClick={() => setEmotion('surprise')}>Surprise</button>
    </>
  )
}

export default App;
