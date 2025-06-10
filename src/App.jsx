import { useState, useEffect } from 'react'
import Mole from '@/components/Mole'

function App() {
  const [score, setScore] = useState(0);
  const [moleVisible, setMoleVisible] = useState(false);
  const [position, setPosition] = useState({ top:0, left:0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const isVisible = Math.random() > 0.5;
      setMoleVisible(isVisible);

      if(isVisible) {
        const top = Math.floor(Math.random()*350);
        const left = Math.floor(Math.random()*350);
        setPosition({top, left});
      }

    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const whackMole = () => {
    if (moleVisible) {
      setScore(prevScore => prevScore + 1);
      setMoleVisible(false);
    };
  };

  return (
    <div >
      <h1>🐹 Whack-a-Mole!</h1>
      <h2>Score: {score}</h2>
      <div>
      {moleVisible && (<Mole onWhack={whackMole} position={position} />)}
      </div>
      
    </div>
  )
}

export default App
