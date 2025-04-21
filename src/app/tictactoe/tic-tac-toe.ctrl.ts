import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'tictactoe',
  templateUrl: './tic-tac-toe.ctrl.html',
  styleUrls: ['./tic-tac-toe.ctrl.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TictactoeComponent {
  colorMap: Map<string, string> = new Map<string, string>([
    ['x', 'red'],
    ['o', 'blue'],
  ]);

  displayColor: string = '';
  winnerFound: boolean = false;
  nextPlayBoardIndex: number | null = null;
  winningCombos = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6],
  ];

  boardWinnerMap: Map<number, string> = new Map<number, string>();

  constructor(private ref: ChangeDetectorRef) {}

  cellContent: string[][] = Array.from({ length: 9 }, () => Array(9).fill(''));

  currentPlayer: 'x' | 'o' = 'x';

  public onCellClick(boardIndex: number, cellIndex: number) {
    if (this.cellContent[boardIndex][cellIndex]) {
      return;
    }

    console.log(boardIndex, cellIndex);

    this.cellContent[boardIndex][cellIndex] = this.currentPlayer;
    if (this.checkBoardWinner(boardIndex)) {
      this.boardWinnerMap.set(boardIndex, this.currentPlayer);
      // if(this.currentPlayer === 'x'){
      // this.displayColor = 'red';
      // }
      // else{
      // this.displayColor = 'blue';}

      console.log(this.boardWinnerMap);
    }

    this.updateNextPlayBoardIndex(boardIndex, cellIndex);
    console.log(this.nextPlayBoardIndex);

    this.checkUltimateWinner();
    if (this.winnerFound) {
      return;
    }

    this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';

    this.ref.detectChanges();
  }

  checkUltimateWinner() {
    const board = [];
    // Ensure all board positions are accounted for, either filled or null
    for (let i = 0; i < 9; i++) {
      board[i] = this.boardWinnerMap.get(i) || null;
    }

    console.log('Current board:', board);
    for (const combo of this.winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.winnerFound = true;
        console.log('Ultimate winner found: ', board[a]);
        //alert(`Ultimate winner found: ${board[a]}`);
        //  this.boardWinnerMap.clear();
      }
    }
  }

  updateNextPlayBoardIndex(boardIndex: number, cellIndex: number) {
    // if (this.checkIfDisabled(boardIndex)) {
    //     this.nextPlayBoardIndex = null;
    // }
    // else {
    // next one already disabled , so it will be null
    if (this.checkIfDisabled(cellIndex)) {
      this.nextPlayBoardIndex = null;
    } else {
      this.nextPlayBoardIndex = cellIndex;
    }
  }

  checkIfDisabled(boardIndex: number) {
    return this.boardWinnerMap.has(boardIndex);
  }

  checkBoardWinner(boardIndex: number) {
    const board = this.cellContent[boardIndex];
    for (const combo of this.winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false; // No winner found
  }
}

//todo
// 1. add a reset button to reset the game
// 2. add a message to show the winner
// 3. add a message to show the next player
// 4. add a message to show the current player
// 5. draw condition
// 6. add a message to show the draw condition
// 7. add a message to draw in board 
