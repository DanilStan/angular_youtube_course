import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrl: './page-form.component.scss',
})
export class PageFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter();
  title: string = '';
  text: string = '';

  constructor() {}
  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
}
