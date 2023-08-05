import { Difficulty } from '@/model/enums/difficulty';
import {
  description,
  heading,
} from '@/components/WelcomeScreen/WelcomeScreen.css';
import { DifficultySelector } from '@/components/DifficultySelector';

export interface WelcomeScreenProps {
  onGameStart: (gameDifficulty: Difficulty) => void;
  lostText: String;
  win: Boolean;
  im: string;
}

export const WelcomeScreen = ({ onGameStart, lostText, win, im }: WelcomeScreenProps) => {

  return (
    <>
      <h1 className={heading}>Maze Game</h1>
      {
        lostText?.length > 0 && <p className={description} style={{ color: '#f95d5d', backgroundColor: '#222222', padding: '0.5rem', borderRadius: '0.5rem' }}>{lostText}</p>
      }
      <p className={description}>
        {
          win ? "Congratulations, oh master of the maze! With wit and wisdom, you navigated the labyrinth's twists and turns, conquering every challenge in your path. As a reward for your triumph, we present you with the key to unlock new adventures and mysteries! The world of possibilities awaits at your fingertips." :
            "The goal of this game is to solve the maze within the given time. Use arrows to move through the labyrinth and find the way out as quickly as possible."
        }
      </p>
      <DifficultySelector im={im} win={win} lost={lostText?.length != 0} onDifficultyChosen={onGameStart} />
    </>
  )
};
