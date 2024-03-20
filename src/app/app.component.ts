import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatModule } from '@mlc-ai/web-llm';
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
  protected readonly chatModule = new ChatModule();
  protected readonly progress = signal(0);
  protected readonly ready = signal(false);
  // LAB #3
  protected readonly reply = signal('');
  // LAB #5
  protected readonly todos = signal<Todo[]>([]);

  async ngOnInit() {
    // LAB #2
    this.chatModule.setInitProgressCallback(({progress}) => this.progress.set(progress));
    await this.chatModule.reload('Mistral-7B-Instruct-v0.2-q4f16_1', undefined, { model_list });
    this.ready.set(true);
  }

  async runPrompt(userPrompt: string) {
    // LAB #3, #7 and #8
    await this.chatModule.resetChat();
    this.reply.set('…');
    await this.chatModule.generate(userPrompt, (_, reply) => this.reply.set(reply));
  }

  addTodo(text: string) {
    // LAB #5
    this.todos.update(todos => [...todos, { done: false, text }]);
  }

  toggleTodo(index: number) {
    // LAB #6
  }
}
