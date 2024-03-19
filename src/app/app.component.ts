import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { model_list } from './model-list';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // LAB #2
  // LAB #3
  // LAB #5

  async ngOnInit() {
    // LAB #2
  }

  async runPrompt(userPrompt: string) {
    // LAB #3, #7 and #8
  }

  addTodo(text: string) {
    // LAB #5
  }

  toggleTodo(index: number) {
    // LAB #6
  }
}
