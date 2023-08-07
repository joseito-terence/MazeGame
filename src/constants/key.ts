import { ArrowKey } from '@/model/enums/arrowKey';
import { MazeCell } from '@/model/maze';
import { RelativeDirection } from '@/model/enums/relativeDirection';

export const KEY_TO_WALL: Record<ArrowKey, keyof MazeCell['walls']> = {
  [ArrowKey.DOWN]: 'top',
  [ArrowKey.UP]: 'bottom',
  [ArrowKey.LEFT]: 'right',
  [ArrowKey.RIGHT]: 'left',
};

export const KEY_TO_DIRECTION: Record<ArrowKey, RelativeDirection> = {
  [ArrowKey.DOWN]: RelativeDirection.UP,
  [ArrowKey.UP]: RelativeDirection.DOWN,
  [ArrowKey.LEFT]: RelativeDirection.RIGHT,
  [ArrowKey.RIGHT]: RelativeDirection.LEFT,
};

export const KEY_TO_SYMBOL: Record<ArrowKey, string> = {
  [ArrowKey.DOWN]: '↓',
  [ArrowKey.UP]: '↑',
  [ArrowKey.LEFT]: '←',
  [ArrowKey.RIGHT]: '→',
};
