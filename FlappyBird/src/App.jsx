// App.js

import { useState, useEffect } from 'react';
import Bird from './Bird';
import Pipes from './Pipes';

const App = () => {
  const [birdPosition, setBirdPosition] = useState({ x: 50, y: 200 });
  const [pipes, setPipes] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const jump = () => {
    if (!gameOver && gameStarted) 
      setBirdPosition((prev) => ({ ...prev, y: prev.y - 120 }));

  };

  const checkCollision = () => {
    const birdTop = birdPosition.y;
    const birdBottom = birdPosition.y + 50;
    const birdLeft = birdPosition.x;
    const birdRight = birdPosition.x + 50;

    pipes.forEach((pipe) => {
      const pipeTop = pipe.y + 50;
      const pipeBottom = pipe.y + 600;
      const pipeLeft = pipe.x;
      const pipeRight = pipe.x + 100;

      const isColliding =
        birdRight > pipeLeft &&
        birdLeft < pipeRight &&
        birdBottom > pipeTop &&
        birdTop < pipeBottom;

      if (isColliding) {
        // On collision end the game (score is handled when bird passes the pipe)
        setGameOver(true);
        setGameStarted(false);
      }
    });

    // Check if bird is out of the screen vertically
    if (birdBottom > 800 || birdTop < -170) {
      // Bird is out of bounds, end the game
      setGameOver(true);
      setGameStarted(false);
    }
  };

  useEffect(() => {
    checkCollision();
  }, [birdPosition, pipes, gameOver]);

  // Increase score when bird passes pipes (and mark pipes as scored)
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const passed = pipes.filter((p) => !p.scored && p.x + 100 < birdPosition.x);
    if (passed.length > 0) {
      setScore((prev) => prev + passed.length * 10);
      setPipes((prev) =>
        prev.map((p) => (passed.some((pp) => pp.id === p.id) ? { ...p, scored: true } : p))
      );
    }
  }, [pipes, birdPosition, gameStarted, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const gravity = setInterval(() => {
      setBirdPosition((prev) => ({ ...prev, y: prev.y + 8 }));
      checkCollision();
    }, 30);

    const pipeGenerator = setInterval(() => {
      if (!gameOver && gameStarted) {
        setPipes((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), x: 600, y: Math.floor(Math.random() * 200 + 100), scored: false },
        ]);
      }
    }, 2000);

    const pipeMove = setInterval(() => {
      if (!gameOver && gameStarted) {
        setPipes((prev) =>
          prev
            .map((pipe) => ({ ...pipe, x: pipe.x - 5 }))
            .filter((pipe) => pipe.x > -150)
        );
      }
    }, 30);

    return () => {
      clearInterval(gravity);
      clearInterval(pipeGenerator);
      clearInterval(pipeMove);
    };
  }, [gameOver, gameStarted]);

  return (
    <div className={`App ${gameOver ? 'game-over' : ''}`} onClick={jump}>
      <Bird birdPosition={birdPosition} />
      {pipes.map((pipe, index) => (
        <Pipes key={index} pipePosition={pipe} />
      ))}
      {gameOver && (
        <center>
          <div className="game-over-message">
            Game Over!
            <br />
            <button className='game-over-btn'
              onClick={() => {
                setBirdPosition({ x: 50, y: 200 });
                setPipes([]);
                setGameOver(false);
                setGameStarted(true);
                setScore(0);
              }}>Click here to Restart</button>
          </div>
        </center>
      )}
      <p className='score'>Score: {score}</p>
    </div>
  );
};

export default App;