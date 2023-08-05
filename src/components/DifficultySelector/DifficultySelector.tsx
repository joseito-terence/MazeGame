import { Difficulty } from '@/model/enums/difficulty';
import { Button } from '@/components/Button';
import { buttonsContainer } from '@/components/DifficultySelector/DifficultySelector.css';

interface DifficultySelectorProps {
  onDifficultyChosen: (gameDifficulty: Difficulty) => void;
  lost: Boolean;
  win: Boolean;
  im: string;
}

export const DifficultySelector = ({
  onDifficultyChosen,
  lost,
  win,
  im
}: DifficultySelectorProps) => (
  <div className={buttonsContainer}>
    {
      !win ? <Button onClick={() => { onDifficultyChosen(Difficulty.HARD) }}>{lost ? "Play Again" : "Start Game"}</Button> : <h1 style={{ color: '#f95d5d', backgroundColor: '#222222', padding: '0.5rem', borderRadius: '0.5rem' }}>{im}</h1>
    }
  </div>
);
