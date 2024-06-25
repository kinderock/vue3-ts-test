export type ThrowResultValue = "rock" | "paper" | "scissors" | null;
// type GameResultValue = "win" | "loose" | null;

export interface throwResult {
  user: ThrowResultValue;
  computer: ThrowResultValue;
}

export interface GameScore {
  user: number;
  computer: number;
}

export interface GameState {
  showDialog: boolean;
  gameResult: GameResult;
  throwsCount: number;
  roundResult: throwResult;
}