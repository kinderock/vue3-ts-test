import { defineStore } from "pinia";
import { throwResult, ThrowResultValue, GameState } from "@/types/GameTypes";

export const gameResultStore = defineStore("gameResult", {
  state: (): GameState => {
    return {
      showDialog: false,
      gameScore: {
        user: 0,
        computer: 0,
      },
      throwsCount: 0,
      roundResult: {
        user: null,
        computer: null,
      }
    }
  },
  actions: {
    incrementThrowsCounter() {
      this.throwsCount++;
    },
    changeDialogStatus(value: boolean) {
      this.showDialog = value;
    },
    setRoundResult(value: throwResult) {
      this.roundResult = value;
    },
    calculateScore() {
      const user: ThrowResultValue = this.roundResult.user;
      const computer: ThrowResultValue = this.roundResult.computer;
      
      if (user === computer) {
        return false;
      } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
      ) {
        this.gameScore.user++;
      } else {
        this.gameScore.computer++;
      }
    },
  },
  getters: {
    hasResults(state) {
      return Object.values(state.roundResult).every(item => item !== null);
    }
  }
});