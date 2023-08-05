import { useCallback, useEffect, useRef, useState } from 'react';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { Difficulty } from '@/model/enums/difficulty';
import { Game } from '@/components/Game';
import { mainContainer, screenDisclaimer } from '@/App.css';
import { useMediaQuery } from '@/hooks/';
import Countdown from 'react-countdown';
import { decryptText, encryptText } from './helpers/maze/encryptionUtils';

interface RendererProps {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

interface appProps {
  targetTime: number
}

let dat = Date.now() + 80000;
export const App = ({ targetTime }: appProps) => {
  const [isGameInProgress, setIsGameInProgress] = useState(false);
  const [initialDifficulty, setInitialDifficulty] = useState<Difficulty>();
  const [lost, setLost] = useState<String>("");
  const [win, setWin] = useState<Boolean>(false);
  const isScreenLargeEnough = useMediaQuery(
    'screen and (min-width: 1024px) and (min-height: 768px)',
  );


  useEffect(() => {
    if (win) {
      setIsGameInProgress(false);
    }
  }, [win])

  const startGame = useCallback((difficulty: Difficulty) => {
    setLost("");
    setIsGameInProgress(true);
    setInitialDifficulty(difficulty);
    dat = Date.now() + 80000
  }, []);

  if (!isScreenLargeEnough) {
    return (
      <main className={mainContainer}>
        <h1 className={screenDisclaimer}>
          This game is suitable for keyboard usage and desktop‑sized screens
        </h1>
      </main>
    );
  }

  const renderer = ({ hours, minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      setLost("Time's up, but the journey doesn't end here. With each attempt, you grow stronger and wiser.")
      setIsGameInProgress(false);
      return <h1>Time Left : {minutes}:{seconds}</h1>
    } else {
      return <h1>Time Left : {minutes}:{seconds}</h1>
    }
  };

  const [sdhgg, setsdhgg] = useState('');
  const [sdhgg2, setsdhgg2] = useState('');

  useEffect(() => {
    handleE();
  }, [])

  const handleE = () => {
    setsdhgg(encryptText("FLAG008"));
  };

  const handleD = () => {
    setsdhgg2(decryptText(sdhgg));
  };

  useEffect(() => {
    if (win) {
      handleD();
    }
  }, [win]);

  return (
    <main className={mainContainer}>
      {isGameInProgress && initialDifficulty ? (
        <>
          <Countdown date={dat} renderer={renderer} />
          <Game setWin={setWin} initialDifficulty={initialDifficulty} />
        </>
      ) : (
        <WelcomeScreen im={sdhgg2} win={win} lostText={lost} onGameStart={startGame} />
      )}
    </main>
  );
};
