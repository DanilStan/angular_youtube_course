import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'I want learn Angular',
      text: 'I learn',
      id: 1,
    },
    {
      title: 'Next block',
      text: 'Next block text...',
      id: 2,
    },
  ];

  onAddPost(post: Post) {
    this.posts.unshift(post);
  }
}
