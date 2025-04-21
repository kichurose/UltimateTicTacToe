import { Component } from '@angular/core';
import { TictactoeComponent } from './tictactoe/tic-tac-toe.ctrl';

@Component({
  selector: 'app-root',
  imports: [TictactoeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'tictactoe';
}
